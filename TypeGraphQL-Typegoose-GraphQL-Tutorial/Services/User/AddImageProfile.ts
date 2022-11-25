import { ExpressContext } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import * as Jwt from 'jsonwebtoken'
import { userModel } from '../../dataSchema/UserSchema';
import { secretE, uploadFile, verifyToken } from '../../utils/Functions';
import { UploadFileI } from '../../utils/interfaces';


class AddImageProfileService{
    async addImageProfile(
        {req} :ExpressContext,
        file : UploadFileI
       ){
        const token = req.cookies.Token
        console.clear();
        console.log('here');
        try {
            const verify = verifyToken(token,secretE.secretToken) as Jwt.JwtPayload
            
            console.time("start")
            const image = await uploadFile(file,verify.data.username)
            userModel.updateOne({_id : verify.data.ID},{
                profileImage : image
            }).then((result) => {
                if(result.modifiedCount === 0){
                    throw Error("image not inserted") 
                }
                console.log(result);
            })
            console.timeEnd("start")
    

                return image
            
        } catch (e:any) {
            return new GraphQLError(e.message)
        }
       }

}

export default AddImageProfileService