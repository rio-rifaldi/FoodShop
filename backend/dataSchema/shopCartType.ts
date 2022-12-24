import { prop, Prop, Ref } from "@typegoose/typegoose";
import { Date } from "mongoose";
import { Field, ID, ObjectType } from "type-graphql";
import { ProductType } from "./ProductSchema";

@ObjectType()
export class ShopChartType{
    @Field(() => ID,{nullable:true})
    @prop()
    public productId: string

    @Field(() => Number)
    @Prop()
    public amount : number

    @Field(() => String)
    @Prop()
    public description : string


    @Prop({type:Date,default:new Date()})
    public createdAt : Date

    @Prop({default : null})
    public modifiedAt : Date | null

    @Field(() => ProductType,{nullable:true} )
    @Prop({ref:() => ProductType,type: ProductType})
    public product : Ref<ProductType>


}
