import { ExpressContext } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import * as Jwt from 'jsonwebtoken'
import { userModel } from '../../dataSchema/UserSchema';
import { deleteImage, secretE, uploadFile, verifyToken } from '../../utils/Functions';
import { UploadFileI } from '../../utils/interfaces';

class UpdateImageProfileService{
    async updateImageProfile(
        {req} :ExpressContext,
        file : UploadFileI
       ){
        const token = req.cookies.Token
        console.clear();
        try {
            
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload

            console.time('destroy')
            userModel.findOne({_id : verify.data.ID}).then((public_id) =>{
                deleteImage(public_id?.profileImage?.public_id as string).then((destroy) =>{
                    if(!destroy) throw Error("image not updated")
                } )
            } )
            console.timeEnd('destroy')


            console.time('upload')
            const image = await uploadFile(file,verify.data.username)

            console.timeEnd('upload')
            
            console.time('updateImageDb')
            const result = await userModel.updateOne({_id : verify.data.ID},{
                profileImage: image
            
            })
   
            console.timeEnd('updateImageDb')

            console.log(result);
            if(result.modifiedCount !== 0){
                return image
            }else{
                throw Error("image not updated")
            }
        } catch (e:any) {
            return new GraphQLError(e.message)
        }
       }

}

export default  UpdateImageProfileService