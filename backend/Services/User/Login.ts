import { ExpressContext } from "apollo-server-express"
import * as bcrypt from 'bcrypt'
import { GraphQLError } from "graphql"
import client from "../../Config/Redis"
import { LoginOut, userModel } from "../../dataSchema/UserSchema"
import { UserInput } from "../../TypeDef/InputType/UserInputType"
import { generateTimeAccess, generateToken, secretE } from "../../utils/Functions"

class LoginService{
    async Login ({password,username}:UserInput,{req,res}:ExpressContext){
        const user = await userModel.findOne({username})
    
        if(!user)  return new GraphQLError("incorect username or password")
        const isPasswordCorrect = bcrypt.compareSync(password as string,user?.password as string)
    
        if(user.username === username && isPasswordCorrect){
            const Token = generateToken({data:{ID:user._id,username}},secretE.secretToken)
            const RefreshToken = generateToken({data:{ID:user._id,username}},secretE.secretTokenRefresh)
            
    
            const cookieTimeToken = generateTimeAccess(3)
            const cookieTimeRefreshToken = generateTimeAccess(0,0,7)
    
            res.cookie("Token",Token,{sameSite:"none",secure:true,expires:cookieTimeToken})
            res.cookie("RefreshToken",RefreshToken,{sameSite:"none",secure:true,expires:cookieTimeRefreshToken})
            await client.SETEX("RefreshToken",60*60*24*7,RefreshToken as string)
            
            let login = new LoginOut();
                login.Token = Token as string
                login.RefreshToken = RefreshToken as string
                
            return login 
        }else{
            return new GraphQLError("incorect password")
    
        }
        }
}

export default LoginService