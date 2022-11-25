import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { Field, ID, ObjectType } from "type-graphql";
import { imagesType } from "../TypeDef/imageType";
import { userDataSchema } from "./UserSchema";


@ObjectType()
// @modelOptions({
//     schemaOptions:{
//         _id : false
//     }
// })
export class ProductType{
    @Field()
    public _id : String

    @Field(() => String)
    @prop({required:true})
    public name : String

    @Field(() => Number)
    @prop({required:true})
    public price : Number

    @Field(() => Number)
    @prop({required:true})
    public stock : Number  

    @Field(() => String)
    @prop({required:true})
    public expired : String

    @Field(() => [String])
    @prop({type:String,default:[]})
    public taste:String[]

    @Field()
    @prop({required:true})
    public description : String

    @Field(() => [imagesType])
    @prop({type :[imagesType] })
    public image : imagesType[]
    
    
    @prop()
    public owner : string

}

export const ProductTypeModel = getModelForClass(ProductType,{options:{customName:"product"}})