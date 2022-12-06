import { getModelForClass, prop, Prop } from "@typegoose/typegoose";
import mongoose, { Date } from "mongoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class ShopChartType{
    @Field(() => ID,{nullable:true})
    @prop()
    public productId: mongoose.Types.ObjectId

    @Field(() => String,{nullable:true})
    public name : string

    @Field(() => Number,{nullable:true})
    public price : number

    @Field(() => String,{nullable:true} )
    public image : string

    @Field(() => Number)
    @Prop()
    public amount : number

    @Field(() => String)
    @Prop()
    public description : string

    @Prop()
    public owner : string

    @Prop({type:Date,default:new Date()})
    public createdAt : Date

    @Prop({default : null})
    public modifiedAt : Date | null


}
export const  ShopChartModel = getModelForClass(ShopChartType,{options:{ customName:"shopCart"}})