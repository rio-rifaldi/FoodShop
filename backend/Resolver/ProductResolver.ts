import { imageI } from '../utils/interfaces';
import { ExpressContext } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ProductType } from "../dataSchema/ProductSchema";
import ProductService from "../Services/ProductService";
import { ProductInput } from "../TypeDef/InputType/ProductInputType";
import { UploadFileI } from '../utils/interfaces';
import { imagesType } from '../TypeDef/imageType';
import { ImageTypeScalar } from '../utils/ImageTypeScalar';

@Resolver()
export class ProductResolver{  
    constructor(private productService:ProductService ) {
        this.productService = new ProductService()
    }
    @Query(() => [ProductType])
    async ListProduct(@Ctx() ctx:ExpressContext){
        return this.productService.listProduct(ctx)
    }
    @Query(() => ProductType)
    async Product(
     @Arg('productId') productId : string,
     ):Promise<GraphQLError | ProductType >{
        return this.productService.Product(productId)
    }

    @Mutation(() => ProductType)
   async createProduct (
    @Arg('input') input : ProductInput,
    @Ctx() ctx:ExpressContext,
    @Arg('imageType',type => [ImageTypeScalar] ) imageType:imageI[]
    ):Promise< GraphQLError | ProductType> {
        console.clear()
    return this.productService.createProduct(input,ctx,imageType)
   }

    @Mutation(() => Boolean)
   async updateImageProduct (
    @Arg('file',() => GraphQLUpload) file: UploadFileI,
    @Arg('public_id') public_id: string,
    @Arg('productId') productId : string,
    @Ctx() ctx:ExpressContext,
    ):Promise< Boolean | undefined > {

    return this.productService.updateImageProduct(public_id,file,ctx,productId)
   }

   @Mutation(() => Boolean)
   async addImageProduct (
    @Arg('file',() => GraphQLUpload) file: UploadFileI,
    @Arg('productId') productId : string,
    @Ctx() ctx:ExpressContext,
    ):Promise< Boolean | undefined > {

    return this.productService.addImageProduct(file,productId,ctx)
   }

   @Mutation(() => Boolean)
   async deleteImageProduct (
    @Arg('public_id') public_id: string,
    @Arg('productId') productId : string,
    ):Promise< Boolean | undefined > {

    return this.productService.deleteImageProduct(productId,public_id)
   }
   
    @Mutation(() => Boolean)
   async updateProduct (
    @Arg('productId') productId : string,
    @Arg('productInput') input : ProductInput,

    ):Promise< Boolean | undefined > {

    return this.productService.updateProduct(productId,input)
   }


    @Mutation(() => String)
   async deleteProduct (
    @Arg('productID') ProductId: string,
    @Ctx() ctx:ExpressContext,
    
    )   {
    return this.productService.deleteProduct(ProductId,ctx)
   }

    @Mutation(() => [imagesType])
    async addImageProductSelf (
        @Arg('file',() => [GraphQLUpload]) file: UploadFileI[],
        @Ctx() ctx:ExpressContext,
    
    )   {
    return this.productService.addImageProductSelf(file,ctx)
   }

    @Mutation(() => Boolean)
   async deleteImageProductSelf (
    @Arg('publicId') publicId: string,
    @Ctx() ctx:ExpressContext,
    
    )   {
    return this.productService.deleteImageProductSelf(publicId,ctx)
   }
}


