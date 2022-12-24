import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import mongoose, { Date } from "mongoose";
import { Field, ID, ObjectType } from "type-graphql";
import { imagesType } from "../TypeDef/imageType";
import { userDataSchema } from "./UserSchema";


@ObjectType()

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

    @Field(() => Number)
    @prop({required:false,default:0})
    public rating : Number  

    @Field(() => Number)
    @prop({required:false,default :0})
    public sold : Number  

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

    @prop({type : Date,default : new Date()})
    public createdAt : Date

    @prop({default : null})
    public modifiedAt : Date | null

}

export const ProductTypeModel = getModelForClass(ProductType,{options:{customName:"product"}})