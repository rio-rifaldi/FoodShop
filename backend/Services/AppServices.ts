import { ExpressContext } from "apollo-server-express";
import { GraphQLError } from "graphql";
import { JwtPayload } from "jsonwebtoken";
import { ProductTypeModel } from "../dataSchema/ProductSchema";
import { userModel } from "../dataSchema/UserSchema";
import { secretE, verifyToken } from "../utils/Functions";

const getAmount = async (id:string,productId:string):Promise<number | false> => {
    const userData = await userModel.findOne({
        _id : id,"shopCart.productId": productId
    })

    if(!userData) return false;
    const amount = userData.shopCart.filter((cart) =>{
        if( cart.productId === productId) return cart.amount
    } )
   
    return amount[0].amount
    

}

export class AppService{
    async QueryProduct(
        {req}:ExpressContext,
    ){
        const token = req.cookies.Token
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(req.cookies.Token){
                const product = await ProductTypeModel.find({
                    owner : {$nin : [verify.data.ID]}
                })
                if(!product) throw new Error("something bad happen")
                
                return product 
            }   
        } catch (error:any) {
            if(error.message === "jwt must be provided")
            {
                console.log('exectx')
                const product = await ProductTypeModel.find()
                if(!product) throw new Error("something bad happen")
                return product 
            }
            return new GraphQLError(error)
        }
    }

    async AddProductToChart(
        {req}:ExpressContext,
        productId : string,
        description : string
        ){
         const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")
            if(!productId) throw new Error("productId must be provided")

  
            const amount = await getAmount(verify.data.ID,productId)
            console.log(amount)
             if(!amount){
                const result = await userModel.updateOne({_id : verify.data.ID},{
                    $push:{
                        shopCart:{
                            productId,
                            description, 
                            amount : 1,
                            product: productId
                        }
                    }
                })  
                if(!result ) throw Error('cannot add to cart')
                 return true
                }
                const result = await userModel.updateOne({
                 _id : verify.data.ID, "shopCart.productId": productId
                 },{
                    $set:{
                        "shopCart.$.amount": amount + 1,
                    }
                 })  
            if(result.modifiedCount === 0 ) throw Error('cannot add to cart')

            
             return true
        
        } catch (error:any) {
            return new GraphQLError(error)
        }
    }
    async GetProductInCart(
        {req}:ExpressContext,
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        try {
            console.clear();
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")
            
                // find userCart
                const carts = await userModel.findOne({_id : verify.data.ID}).populate("shopCart.product","","product")
                console.log(carts?.shopCart)

                if(!carts) throw new Error('user cart not defined')
                return carts.shopCart
            } catch (error:any) {
                return new GraphQLError(error)
            }
    }

    async DeleteProductInCart(
        {req}:ExpressContext,
        productId : string,
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        
            try {
                    const verify = verifyToken(token,secretE.secretToken) as JwtPayload
                    if(!verify) throw Error("you must re -login")
                    
                    const result  = await userModel.updateOne({
                        _id:verify.data.ID, "shopCart.productId": productId
                    },{
                        $pull:{
                            shopCart:{
                                productId
                            }
                        }
                    })
                    if(result.modifiedCount!== 0){
                        return true
                    }else{
                        throw new Error('cannot delete product')
                    }
            } catch (error:any) {
                    return new GraphQLError(error)
            }
    }

    async DecreasingProductInCart(
        {req}:ExpressContext,
        productId : string,
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")
            const amount = await getAmount(verify.data.ID,productId)
            if(!amount) throw Error('limit minimum decreacing')
            
            const result = await userModel.updateOne({
                _id:verify.data.ID, "shopCart.productId": productId
            },{
                $set:{"shopCart.$.amount" : amount - 1}
            })

            if(result.modifiedCount !== 0){
                return true
            }else{
                throw new Error('cannot add product')
            }
            
        } catch (err:any) {
                return new GraphQLError(err)
        }
        
    }
    async findProduct(
            query: string,
    ){
        try {
            const product = await ProductTypeModel.find({
                name:{
                    $regex:query,
                    $options:"i"
                }})
            if(!product) throw new Error("something bad happen")
            return product 
        } catch (error:any) {
            return new GraphQLError(error)
        } 
    }
    async UpdateDescriptionOrder(
        {req}:ExpressContext,
        productId : string,
        description : string
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")
            if(!productId) throw new Error("productId must be provided")

            const result  = await userModel.updateOne({
                _id:verify.data.ID, "shopCart.productId": productId
            },{
                $set:{"shopCart.$.description" : description}
            })
            if(result.modifiedCount !== 0){
                return true
            }else{
                throw new Error('cannot update Description')
            }
        } catch (err:any) {
            return new GraphQLError(err)
        }
    }

    async addPaymentMethod (
        {req}:ExpressContext,
        paymentMethod : string,
        detailAddress : string
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")

            const result = await userModel.updateOne({
                _id: verify.data.ID
            },{
                $push:{
                    payment : {
                        paymentMethod,
                        detailAddress
                    }
                }
            })

            if(result.modifiedCount !== 0){
                return true
            }else{
                throw new Error('cannot add address detail,try again later')
            }

        } catch (err:any) {
            return new GraphQLError(err)
        }
    }

    async deletePaymentMethod(
        {req}:ExpressContext,
        paymentId : string,
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        
        try {
                const verify = verifyToken(token,secretE.secretToken) as JwtPayload
                if(!verify) throw Error("you must re -login")
                
                const result = await userModel.updateOne({_id : verify.data.ID},{
                    $pull:{
                        payment:{
                            _id : paymentId
                        }
                    }
                })
                if(result.modifiedCount !== 0){
                    return true
                }else{
                    throw new Error('cannot delete payment')
                }
        } catch (err:any) {
                return new GraphQLError(err)
        }
    }

    async onBuyProduct(
        {req}:ExpressContext,
        // productIdList:string[]
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")

            const user = await userModel.findOne({_id:verify.data.ID})
            const cart = user?.shopCart
            const productIdList = cart?.map((el) => el.productId) 
            const amount = cart?.map((el) => el.amount )

            const result =  await ProductTypeModel.find({
                _id: {$in:productIdList}
            })
            const newArr = cart?.map((product) => {
                let arr = {
                    productId : product.productId,
                    amount : product.amount,
                }
                return arr
            })
            // const mentah = newArr?.map((el) => {
            //    return ProductTypeModel.updateOne({_id: el.productId},{
            //         $inc:{stock: -el.amount,sold:el.amount}
            //     })
            // })
            // if(!mentah) throw new Error("error")
            // const resultPromise = await Promise.all(mentah)
            console.clear()
            
            console.log("---------------------------")
            
            // console.log(console.log(resultPromise))
            console.log(result)
            return true
            

        } catch (err:any) {
            return new GraphQLError(err)   
        }
    }

    
}

