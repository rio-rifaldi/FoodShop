import { Prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class ShopChartType{
    @Field(() => ID)
    @Prop()
    public productId : string

    @Field(() => String)
    @Prop()
    public name : string

    @Field(() => Number)
    @Prop()
    public price : number

    @Field(() => String)
    @Prop()
    public imageUrl : string

    @Field(() => Number)
    @Prop()
    public amount : number


}