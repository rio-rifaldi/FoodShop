import { ExpressContext } from "apollo-server-express";
import { UserInputDetail } from "../../TypeDef/InputType/UserDetailInput";
import { secretE, verifyToken } from "../../utils/Functions";
import * as Jwt from 'jsonwebtoken'
import { userDataSchema, userModel } from "../../dataSchema/UserSchema";
import { GraphQLError } from "graphql";

class AddUserDetailInfoService{
    async addUserDetail(
        input:UserInputDetail,
        {req,res}:ExpressContext
        ){
            console.clear();
        const token = req.cookies.Token
        const {aboutMe,address,birthDay,numberTelp,profession,country} = input
        if(!token) throw Error('you need re-login')
        
        try {
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
            if(!verify) throw Error
            const userDetail = await userModel.updateOne({_id : verify.data.ID},{
                aboutMe,address,birthDay,numberTelp,profession,country
            })

            if(userDetail.modifiedCount === 0) throw Error('user not added')
        
            const user = await userModel.findOne({_id : verify.data.ID}) as userDataSchema

            return user 
            
        } catch (error:any) {
            return new GraphQLError(error.message)
        }
    }
}   

export default AddUserDetailInfoService