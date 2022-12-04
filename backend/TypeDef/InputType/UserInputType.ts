import { Field, InputType } from "type-graphql";
import { IsEmail, Length } from 'class-validator';

@InputType()
export class UserInputAuth{
    @Field()
    @Length(3,20)
    username!: string;

    @Field()
    @Length(3,26)
    password!: string;

    @Field()
    @Length(3,18)
    firstName!: string;

    @Field()
    @Length(3,18)
    lastName!: string;

    @Field()
    @Length(3,26)
    email!: string;

}

@InputType()
export class UserInput{
    @Field()
    @Length(3,20)
    username!: string;

    @Field()
    @Length(3,26)
    password!: string;
}

@InputType()
export class verifyInput{

    @Field()
    @Length(3,26)
    password!: string;
}
