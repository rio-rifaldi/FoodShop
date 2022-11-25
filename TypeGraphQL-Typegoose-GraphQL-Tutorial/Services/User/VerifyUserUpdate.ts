import { ExpressContext } from 'apollo-server-express'
import * as Jwt from 'jsonwebtoken'
import { userModel } from '../../dataSchema/UserSchema'
import { secretE, verifyToken } from '../../utils/Functions'
import * as bcrypt from 'bcrypt'
import { GraphQLError } from 'graphql'


class VerifyUserUpdateService{

    async verifyUserAuth ({req}:ExpressContext,password:string){
        console.clear()
        const token = req.cookies.Token
        if(!token) throw Error('user not defined,please login')

        try {
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload

            console.time("findUser")
            const user = await userModel.findOne({_id: verify.data.ID})
            console.timeEnd("findUser")

            const passwordDb = String(user?.password)

            console.time('compare')
            const isMatch  = bcrypt.compareSync(password,passwordDb)
            console.timeEnd('compare')

        
            if(isMatch === true){
                return true
            }else{
                throw new Error("invalid password , please try again!")
            }

        } catch (error:any) {
                return new GraphQLError(error.message)
        }
    }
}

export default VerifyUserUpdateService