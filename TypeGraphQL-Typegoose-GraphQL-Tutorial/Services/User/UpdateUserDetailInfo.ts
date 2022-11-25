import { ExpressContext } from 'apollo-server-express'
import { GraphQLError } from 'graphql'
import * as Jwt from 'jsonwebtoken'
import { userDataSchema, userModel } from '../../dataSchema/UserSchema'
import { UserInputDetail } from '../../TypeDef/InputType/UserDetailInput'
import { secretE, verifyToken } from '../../utils/Functions'

class UpdateUserDetailInfoService{
    async updateUserDetail(
        {req,res}:ExpressContext,
        input:UserInputDetail
       ){
        const token = req.cookies.Token
        const {aboutMe,address,birthDay,numberTelp,profession,country} = input
        if(!token) throw new Error
        
        try {
    
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
    
            const data = {
                aboutMe,address,birthDay,numberTelp,profession,country
            }
            const user = await userModel.updateOne({_id : verify.data.ID},data)
            
            if(user.modifiedCount !== 0){
                return await userModel.findOne({_id : verify.data.ID})  as userDataSchema
            }else{
                throw Error("data not updated")
            }
            
        } catch (err) {
            new GraphQLError("you need re-login")
            console.log(err);
        }
    
       }
}

export default UpdateUserDetailInfoService