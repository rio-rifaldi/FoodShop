import {  Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class imagesType{
    
    @Field()
    @Prop()
    public public_id : string
    
    @Field()
    @Prop()
    public url: string

    @Field()
    @Prop()
    public secureUrl : string

    @Field()
    @Prop()
    public bytes : number

    @Field()
    @Prop()
    public extension : string
    

}

