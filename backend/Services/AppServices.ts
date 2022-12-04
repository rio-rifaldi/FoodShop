import { ExpressContext } from "apollo-server-express";
import { GraphQLError } from "graphql";
import { JwtPayload } from "jsonwebtoken";
import { ProductTypeModel } from "../dataSchema/ProductSchema";
import { userModel } from "../dataSchema/UserSchema";
import { secretE, verifyToken } from "../utils/Functions";

const getAmount = async (id:string,productId:string) => {
    const cart = await userModel.findOne({_id:id})
    if(!cart) throw new Error("User not found")

    const isExist = cart.shopCart.filter((cartProduct) =>{
        return cartProduct.productId === productId
    } )
    return isExist
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
        ){
         const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must re -login")
            if(!productId) throw new Error("productId must be provided")
            
            const product = await ProductTypeModel.findOne({_id:productId})
            if(!product) throw new Error("product not found")
            
            const isExist = await getAmount(verify.data.ID,productId)
             if(isExist?.length === 0){
                 console.time("push data to userDb")
                 const result  = await userModel.updateOne({_id : verify.data.ID},{
                     $push:{
                         shopCart:{
                             productId : productId,
                             name : product.name,
                             imageUrl : product.image[0].url,
                             price : product.price,
                             amount : 1
                            }
                        }
                    })
                    console.timeEnd("push data to userDb")
                    
                    if(result.modifiedCount !== 0){
                        return true
                    }else{
                        throw new Error('cannot add product')
                    }
                }else if(isExist?.length == 1){
                const result = await userModel.updateOne({
                    _id:verify.data.ID, "shopCart.productId": productId
                },{
                    $set:{"shopCart.$.amount" : isExist[0].amount + 1}
                })

                if(result.modifiedCount !== 0){
                    return true
                }else{
                    throw new Error('cannot add product')
                }
             }
            
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
                const userCart = await userModel.findOne({_id:verify.data.ID})
                if(!userCart) throw new Error("userCart not found")

                const productIDList = userCart.shopCart.map((el) =>{
                    return el.productId
                } ) 
                const result = await ProductTypeModel.find({
                    _id:{$in:productIDList}
                })
                
                return userCart.shopCart
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

            const isExist = await getAmount(verify.data.ID,productId)
            
            const result = await userModel.updateOne({
                _id:verify.data.ID, "shopCart.productId": productId
            },{
                $set:{"shopCart.$.amount" : isExist[0].amount - 1}
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
    async FindProduct(){
        try {
            const product = await ProductTypeModel.find({name:""})
            if(!product) throw new Error("something bad happen")
            return product 
        } catch (error:any) {
            return new GraphQLError(error)
        } 
    }

    
}


// cara :
//     - cuma product id dan amount di satu typeData,
//       getAll product by fetch di function dan return