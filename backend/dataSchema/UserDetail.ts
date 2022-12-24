import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserDetail{
    @Field({nullable:true})
    @prop({default:null})
    public numberTelp : String

    @Field({nullable:true})
    @prop({default:null})
    public birthDay : String

    @Field({nullable:true})
    @prop({default:null})
    public profession : String

    @Field({nullable:true})
    @prop({default:null})
    public address : String

    @Field({nullable:true})
    @prop({default:null})
    public rating : number

    @Field({nullable:true})
    @prop({default:null})
    public country : String

    @Field({nullable:true})
    @prop({default:null})
    public aboutMe : String
}
