import {  Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class imagesType{
    
    @Field()
    @Prop({default : ""})
    public public_id : string
    
    @Field()
    @Prop({default : ""})
    public url: string

    @Field()
    @Prop({default : ""})
    public secureUrl : string

    @Field()
    @Prop({default : 0})
    public bytes : number

    @Field()
    @Prop({default : ""})
    public extension : string
    

}

