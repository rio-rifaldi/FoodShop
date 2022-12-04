import { ExpressContext } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import * as Jwt from 'jsonwebtoken'
import { userModel } from '../../dataSchema/UserSchema';
import { deleteImage, secretE, verifyToken } from '../../utils/Functions';

class DeleteImageProfileService{
    async deleteImageProfile(
        {req} :ExpressContext
       ){
        const token = req.cookies.Token
        console.clear();
        try {
            
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
            userModel.findOne({_id : verify.data.ID}).then((public_id) =>{
                deleteImage(public_id?.profileImage?.public_id as string).then((destroy) =>{
                    if(!destroy) throw Error("image not updated")
                } )
            } )
            

            const result = await userModel.updateOne({_id : verify.data.ID},{
                profileImage : {
                    url : "",
                    secureUrl : "",
                    bytes : 0,
                    public_id : "",
                    extension : ""
                }
            
            })

            console.log(result);
            if(result.modifiedCount !== 0){
                return true
            }else{
                throw Error("image not deleted")
            }
        } catch (e:any) {
            return new GraphQLError(e.message)
        }
       }
}

export default DeleteImageProfileService