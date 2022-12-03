import { ExpressContext } from 'apollo-server-express';
import * as cloudinary from 'cloudinary';
import { GraphQLError } from 'graphql';
import { JwtPayload } from 'jsonwebtoken';
import { ProductType, ProductTypeModel } from "../dataSchema/ProductSchema";
import { userModel } from '../dataSchema/UserSchema';
import { ProductInput } from "../TypeDef/InputType/ProductInputType";
import { deleteImage, secretE, uploadFile, uploadFileBase64, verifyToken } from '../utils/Functions';
import { imageI, UploadFileI } from '../utils/interfaces';

    
class ProductService{

    async listProduct({req}:ExpressContext){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(verify){
                return await ProductTypeModel.find({owner: verify.data.ID})
            }else{
                throw Error('ada masalah')
            }
            
        } catch (e:any) {
            return new GraphQLError(e)
        }
    }   

    async Product(
        {req,res}: ExpressContext,
        productId : string,
    ){
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")
        
        try {
            const verify = verifyToken(token,secretE.secretToken) as JwtPayload
            if(!verify) throw Error("you must be verified")

            const product = await ProductTypeModel.findOne({_id:productId})
            if(!product) throw Error("product not found")
           
            return product
        } catch (error) {
            console.log(error);
            return new GraphQLError(error as any)
        }
        

    }


    async deleteProduct(productId: string,{req,res}: ExpressContext){
        console.clear();
        const token = req.cookies.Token
        if(!token) throw Error("you need to login")

            const verify = verifyToken(token,secretE.secretToken) as JwtPayload

            console.time("find product")
            const deleted  = await ProductTypeModel.findOneAndDelete({
                _id:productId
            })
            console.timeEnd("find product")
            
            if(!deleted) return new GraphQLError("incorrect ProductId")

            const updateUserProduct = await userModel.updateOne({
                _id:verify.data.ID
            },{
                $pull:{
                    product:{
                        $in:[deleted._id]
                    }
                }
            })
            console.log(updateUserProduct)

            console.time("delete product")
            const deleting = deleted.image.map((image) =>{
                return deleteImage(image.public_id)
            } )
            const result = await Promise.all(deleting)
           console.timeEnd("delete product")

            if(result){
                return "product deleted" 
            }else{
                return new GraphQLError("image not deleted")
            }
            
         
 

    }

    async createProduct(
        {taste,name,price,description,stock,expired}:ProductInput,
        {req}:ExpressContext,
        imageType : imageI[]
    ){

        try {
            
            const token = req.cookies.RefreshToken
            const verify = verifyToken(token,secretE.secretTokenRefresh) as JwtPayload
            if(!verify) throw Error("you must re-login");

                    const dataProduct = {
                        taste,name,price,description,stock,expired,
                        owner: verify.data.ID,
                        image: imageType 
                    }

                    console.time("saving product to db")
                    const product = new ProductTypeModel(dataProduct)
                    await product.save()
                    console.timeEnd("saving product to db")
                    
                    
                    if(product){
                        console.time("push data to userDb")
                        const result  = await userModel.updateOne({_id : verify.data.ID},{
                            $push:{
                                product:product._id
                            }
                        })
                        console.timeEnd("push data to userDb")
                        return product as ProductType
                    }else{
                        throw Error("product not added")
                    }      
                      
        } catch (e:any) {
            console.log(e);
            return new GraphQLError(e)
        }
    }

    async updateImageProduct(
        public_id : string,
        file : UploadFileI,
        {req}:ExpressContext,  
        productId : string,
    ){
        const token = req.cookies.RefreshToken
        const verify = verifyToken(token,secretE.secretTokenRefresh) as JwtPayload
        try {
            if(!verify) throw Error("you must re -login");

            const result = await cloudinary.v2.uploader.destroy(public_id)  
            console.log(result,"image deleted");

            const product = await ProductTypeModel.findOne({owner:verify.data.ID})

            const updateImage = await uploadFile(file,`${verify.data.username}/Product/${product?.name}`)
            
            console.log(updateImage,"image updated");
            if(!updateImage) return false


            const updatedImage = await ProductTypeModel.updateOne({
                _id:productId,"image.public_id": public_id
            },{
                $set : {
                   "image.$" : updateImage
                }
            })
            if(updatedImage.modifiedCount !== 0 ){
                return true
            }else{
                return false
            }
            
        } catch (error) {
            console.log(error);
        }


    }
    async deleteImageProduct (
        productId : string,
        public_id : string,
    ){

        const result = await deleteImage(public_id)
        const product = await ProductTypeModel.updateOne({
            _id:productId,"image.public_id": public_id
        },{
            $pull:{
                image:{
                  public_id  
                }
            }
        })
        console.log(product);
        if(product.modifiedCount !== 0 && result){
            return true
        }else{
            return false
        }

    }
    async addImageProductSelf (
        file : UploadFileI[],
        {req}:ExpressContext, 
    ){
        console.clear();
        try {
            const token = req.cookies.RefreshToken
            const verify = verifyToken(token,secretE.secretTokenRefresh) as JwtPayload
            if(!verify) throw Error("you must re -login");
            
            const images = file.map((image) =>{
                return uploadFile(image,`${verify.data.username}/Product`)
            } )

            console.time('uploadImage')
            const result = await Promise.all(images)
            console.timeEnd('uploadImage')
            
    
            if(result){
                return result
            }
        } catch (err:any) {
            return new GraphQLError(err)
        }

        
    }


    async deleteImageProductSelf (
        publicId : string,
        {req}:ExpressContext, 
    ){
        console.clear();
        try {
            const token = req.cookies.RefreshToken
            const verify = verifyToken(token,secretE.secretTokenRefresh) as JwtPayload
            if(!verify) throw Error("you must re -login");
        
          
            const result = await deleteImage(publicId)
    
            console.log(result);
            if(result){
                return true
            }else{
                throw new Error('error')
            }
        } catch (err:any) {
            return new GraphQLError(err)
        }

        
    }



    async addImageProduct (
        file : UploadFileI,
        productId : string,
        {req}:ExpressContext, 
    ){
        console.clear();
        const token = req.cookies.RefreshToken
        const verify = verifyToken(token,secretE.secretTokenRefresh) as JwtPayload
        if(!verify) throw Error("you must re -login");

        const product = await ProductTypeModel.findOne({owner:verify.data.ID})

        const image = await uploadFile((await file),`${verify.data.username}/Product`)

        const productUpdated = await ProductTypeModel.updateOne({
            _id:productId
        },{
            $push :{
                image 
            }
        })
        console.log(image);
     console.log(productUpdated);
        if(productUpdated.modifiedCount !== 0){
            return true
        }else{
            false
        }
    }


    async updateProduct(
        productId : string,
        input : ProductInput
    ){
        const { name,stock,price,expired,taste,description} = input
        const result = await ProductTypeModel.updateOne({_id:productId},{
            $set:{
                name,stock,price,expired,taste,description
            }
        })

        if(result.modifiedCount !== 0){
            return true
        }else{
            return false
        }
    }
}
export default ProductService


