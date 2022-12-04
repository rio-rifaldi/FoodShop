import { Field, InputType } from "type-graphql";

@InputType()
export class UserInputDetail{
    @Field()
    public numberTelp : string

    @Field()
    public birthDay : string

    @Field()
    public profession : string

    @Field()
    public address : string

    @Field()
    public country : string

    @Field()
    public aboutMe : string

}