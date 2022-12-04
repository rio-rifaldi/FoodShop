import { ExpressContext } from "apollo-server-express"
import { GraphQLError } from "graphql"
import  * as Jwt  from "jsonwebtoken"
import { secretE, verifyToken } from "../../utils/Functions"


class HelloService{

    async Hello ({req,res}:ExpressContext){
        const token = req.cookies.Token
        console.clear()
        if(!token)  throw Error('you need to re-login')
        
        try {
            
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
            if(verify){
                
                console.log(verify.data,"dari data Query")
                    return verify.data.ID
                }else{  
                     throw Error
                }
                
            } catch (e:any) {
                return new GraphQLError(e)
            }
   }
  
}
export default HelloService