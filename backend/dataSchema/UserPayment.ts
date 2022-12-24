import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class userPayment{
    @Field(() => String,{nullable:true})
    public _id : String

    @Field(() => String,{nullable:true})
    @prop({required:false,default:null})
    public paymentMethod : String
    
    @Field(() => String,{nullable:true})
    @prop({required:false,default:null})
    public detailAddress : String

    
}