import { ExpressContext } from "apollo-server-express"
import { GraphQLError } from "graphql"
import { userDataSchema, userModel } from "../../dataSchema/UserSchema"
import { UserInputAuth } from "../../TypeDef/InputType/UserInputType"
import { secretE, verifyToken } from "../../utils/Functions"
import * as Jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

class UpdateUserAuthService{

    async updateUserAuth(
        {req,res}:ExpressContext,
        input:UserInputAuth
       ):Promise<userDataSchema | GraphQLError >
       {
        const token = req.cookies.Token
        const {firstName,lastName,username,password,email} = input
        if(!token) throw new Error("you need relogin")
        
        try {
    
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
    
            if(!password ) throw Error("password must filled")
            if(!verify ) throw Error("you need re - login")
            const hash_password = bcrypt.hashSync(password as string,10)
            const data = {
                firstName,lastName,username,
                email,
                password : hash_password
            }
            const user = await userModel.updateOne({_id : verify.data.ID},data)
            
            if(user.modifiedCount !== 0){
                return await userModel.findOne({_id : verify.data.ID}) as userDataSchema
            }else{
                throw Error('data not updated')
            }
            
        } catch (err:any) {
            return new GraphQLError(err.message)

        }
    
       }
}

export default UpdateUserAuthService