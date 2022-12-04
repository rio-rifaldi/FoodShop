import { ExpressContext } from 'apollo-server-express'
import { GraphQLError } from 'graphql'
import * as Jwt from 'jsonwebtoken'
import cloudinary from '../../Config/Cloudinary'
import { ProductTypeModel } from '../../dataSchema/ProductSchema'
import { userModel } from '../../dataSchema/UserSchema'
import { secretE, verifyToken } from '../../utils/Functions'


class DeleteUserService{
    async DeleteUser ({req,res}:ExpressContext):Promise<string | GraphQLError> {
        console.clear()
        const token = req.cookies.Token
        if(!token) throw Error('user not defined,please login')


        try {
            // verify token
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
            

            // delete all Product on database
            ProductTypeModel.deleteMany({owner : verify.data.ID}).then((result) => console.log(result) )
            const user = await userModel.findOneAndDelete({_id : verify.data.ID})

            cloudinary.v2.api.delete_resources_by_prefix(`FoodShop/${verify.data.username}`,{all:true}).then((result) =>{
                if(result){
                    cloudinary.v2.api.delete_folder(`FoodShop/${verify.data.username}`).then((el) => console.log(el) )
                }
            } )

            // console.log(destroyImage);
            if(user){
                res.clearCookie('RefreshToken',{sameSite:"none",secure:true})
                res.clearCookie('Token',{sameSite:"none",secure:true})   
                return `good bye ${user.username} , see you in next Time 😄`
            }else{
                throw Error("user not defined")
            }
        } catch (e:any) {
            throw new GraphQLError(e.message)
        }
    }
}

export default DeleteUserService