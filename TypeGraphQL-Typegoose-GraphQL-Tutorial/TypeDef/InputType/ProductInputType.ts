import { Length, minLength } from "class-validator";
import mongoose from "mongoose";
import { Field, InputType } from "type-graphql";

@InputType()
export class ProductInput{

    @Field()
    @Length(1,30)
    name! : String

    @Field()
    price! : Number

    @Field()
    stock! : Number 

    @Field()
    expired! : String

    @Field(() => [String])
    taste? : mongoose.Types.Array<string>

    @Field()
    @Length(1,200)
    description! : String
}