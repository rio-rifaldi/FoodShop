import { ExpressContext } from "apollo-server-express"
import { UserDetailBlank, userModel } from "../../dataSchema/UserSchema"
import { UserInputAuth } from "../../TypeDef/InputType/UserInputType"
import * as bcrypt from 'bcrypt'
import cloudinary from "../../Config/Cloudinary"
import { GraphQLError } from "graphql"

class CreateUserService {

    async CreateUser (
        {password,username,firstName,lastName,email}:UserInputAuth,
        {req,res}:ExpressContext
        )  {
        console.clear()
      
        try {
            const hash_password = bcrypt.hashSync(password as string,10)
            const user = await userModel.create({
                username,
                firstName,
                lastName,
                email,
                password: hash_password,
                ...UserDetailBlank
            })
            cloudinary.v2.api.create_folder(`/FoodShop/${username}`)
            if(req.cookies.Token && req.cookies.RefreshToken){
                res.clearCookie('RefreshToken',{sameSite:"none",secure:true})
                res.clearCookie('Token',{sameSite:"none",secure:true}) 
            }
            return user;
            
        } catch (e:any) {
            console.log(e);
            if(e.code === 11000) return new GraphQLError("user is already exist")
            else{return new GraphQLError('something bad happen,please try again later')}
        }
       }
       
}

export default CreateUserService