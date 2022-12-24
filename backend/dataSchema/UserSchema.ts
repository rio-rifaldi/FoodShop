import { ProductType } from './ProductSchema';
import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { imagesType } from '../TypeDef/imageType';
import { ShopChartType } from './shopCartType';
import { UserDetail } from './UserDetail';
import { userPayment } from './UserPayment';

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

    @Field(() => UserDetail,{nullable:true})
    @prop({required:false})
    public UserDetail : UserDetail
   

    // payment User

    @Field(() => [userPayment])
    @prop({required:false,type: [userPayment],default:[]})
    public payment : userPayment[]
    

    //reference to product

    @Field(() => [ProductType],{nullable:true})
    @prop({required:false,ref: () => ProductType,type: [ProductType],default:[] })
    public product : Ref<ProductType>[]
    
    // shpopping cart --> ref to productID


    @Field(() => [ShopChartType],{nullable:true})
    @prop({required:false,type: [ShopChartType],default:[] })
    public shopCart : ShopChartType[]

}

@ObjectType()
export class LoginOut{
    @Field()
    public RefreshToken : String

    @Field()
    public Token : String

}





export const userModel = getModelForClass(userDataSchema,{options:{customName:"user"}})