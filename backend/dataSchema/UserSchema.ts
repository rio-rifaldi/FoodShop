import { ProductType } from './ProductSchema';
import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { imagesType } from '../TypeDef/imageType';
import { ShopChartType } from '../TypeDef/shopCartType';

@ObjectType()

export class userDataSchema {
    @Field(() => ID)
    public id : String

    @Field()
    @prop({required:false,lowercase:true,unique:true,trim:true})
    public username : String
    
    @prop({required:false})
    public password : String
    
    @Field()
    @prop({required:false})
    public firstName : String
    
    @Field()
    @prop({required:false})
    public lastName : String
    
    @Field({nullable:true})
    @prop({required:false,lowercase:true,unique:true,trim:true})
    public email : String

    @Field(() => imagesType,{nullable:true})
    @prop({required:false})
    public profileImage ?: imagesType
    
    // userDetail


    @Field({nullable:true})
    @prop({required:false})
    public numberTelp : String

    @Field({nullable:true})
    @prop({required:false})
    public birthDay : String

    @Field({nullable:true})
    @prop({required:false})
    public profession : String

    @Field({nullable:true})
    @prop({required:false})
    public address : String

    @Field({nullable:true})
    @prop({required:false})
    public rating : number

    @Field({nullable:true})
    @prop({required:false})
    public country : String

    @Field({nullable:true})
    @prop({required:false})
    public aboutMe : String


    //reference to product

    @Field(() => [ProductType],{nullable:true})
    @prop({required:false,ref: () => ProductType,type: [ProductType] })
    public product : Ref<ProductType>[]
    
    // shpopping cart --> ref to productID


    @Field(() => [ShopChartType],{nullable:true})
    @prop({required:false,type: [ShopChartType] })
    public shopCart : ShopChartType[]

}

export let UserDetailBlank ={
    aboutMe : null,
    address : null,
    birthDay : null,
    numberTelp : null,
    profession : null,
    rating: null,
    country : null,
    profileImage : {
        url : "",
        secureUrl : "",
        bytes : 0,
        public_id : "",
        extension : ""
    },
    product :[],
    shopCart : []
}

@ObjectType()
export class LoginOut{
    @Field()
    public RefreshToken : String

    @Field()
    public Token : String

}





export const userModel = getModelForClass(userDataSchema,{options:{customName:"user"}})