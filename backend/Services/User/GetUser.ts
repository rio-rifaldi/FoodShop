import { ExpressContext } from "apollo-server-express"
import { GraphQLError } from "graphql"
import * as Jwt from 'jsonwebtoken'
import { userModel } from "../../dataSchema/UserSchema"
import { secretE, verifyToken } from "../../utils/Functions"


class GetUserService{

    async getUser ({req,res}:ExpressContext){
       const token = req.cookies.Token
       if(!token) return new GraphQLError('you need to re-login')
       try {
           const {data} = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
   
            const user = await userModel.findOne({_id:data.ID}).populate("product","","product")
            console.clear();
            console.log(user)
            return user     

           
       } catch (err) { 
           console.log(err)
           
       }
      }

}
export default GetUserService