import jwt from "jsonwebtoken";
import internal from 'stream';
import * as uuid from 'uuid'
import * as cloudinary from 'cloudinary';
import { imageI, UploadFileI } from './interfaces';
import { GraphQLError } from "graphql";


export const generateTimeAccess = (
    minute :number = 0,
    hours : number = 0,
    days :number = 0

):Date => {
    const date = new Date()
    const minuteTime = date.getTime() +  1000 * 60 * minute
    const hoursTime = date.getTime() +  1000 * 60 * 60 * hours
    const daysTime = date.getTime() + 1000 * 60 * 60 * 24 * days
   
    if(minuteTime !== date.getTime())  date.setTime(minuteTime)
    else if(hoursTime !== date.getTime()) date.setTime(hoursTime)
    else if(daysTime !== date.getTime())  date.setTime(daysTime)
    else date.setTime(0)

    return date

}
export enum secretE {
    "secretToken" = "secretToken",
    "secretTokenRefresh" = "secretTokenRefresh"
}
export const generateToken =(data:object|string,secret:secretE ) =>{
    const secretToken = process.env.TOKEN_KEY as string
    const secretTokenRefresh = process.env.TOKEN_KEY as string
    if(secret === secretE['secretToken']){
        return jwt.sign(data,secretToken,{expiresIn:"180s"})
    }else if(secret === secretE['secretTokenRefresh']){
        return jwt.sign(data,secretTokenRefresh,{expiresIn:"7d"})
    }

} 
export const verifyToken = (token:string,secret:secretE) => {
    const secretToken = process.env.TOKEN_KEY as string
    const secretTokenRefresh = process.env.TOKEN_KEY as string

    if(secret === secretE['secretToken']){
        return jwt.verify(token,secretToken)
    }else if(secret === secretE['secretTokenRefresh']){
        return jwt.verify(token,secretTokenRefresh)    
    }

}


export const UploadStream  =  (
    file : UploadFileI,
    folderName ?: string
) =>{
    return new Promise<imageI[] | undefined>(async (resolve,reject) =>{
        
    try {
            const {mimetype,filename,encoding,createReadStream} = await file
            console.log('exect');
              await cloudinary.v2.api.create_folder(`/FoodShop/${folderName}`)
            const image = cloudinary.v2.uploader.upload_stream({
                    public_id: `${filename}__${uuid.v4()}`, 
                    folder:`FoodShop/${folderName}`
                },(err,data) =>{
                    console.log('eexect')
                    if(err) {
                        throw new Error(String(err))
                    }
                    if (data) {   
                        return resolve([
                            {
                                public_id: data?.public_id,
                                url : data?.url,
                                secureUrl : data?.secure_url,
                                bytes : data?.bytes,
                                extension : data?.format
                            }
                        ])
                    }
                
                
            } ) 
            createReadStream().pipe(image)
        
        
    } catch (error:any) {
        const err = Object(error)
        console.log(err)
        
        return reject(err)
    }
  

    } )
}

export const deleteImage = async (
    public_id : string, 
) => {
    let Result,Err;
    const cloudinaryDeleteImage = async (public_id : string ) =>{
        try {
            await new Promise((resolve, reject) =>{
                cloudinary.v2.uploader.destroy(public_id, (err,result) =>{
                      if(result){
                        Result = result
                          resolve(result)
                        }else{
                            Err = err
                          reject(err)
                      }
                  }  )
            } )
        } catch (error) {
            console.log(error)
            throw new GraphQLError(`cannot delete image : ${error} `)
        }
    }  
      
   
    await cloudinaryDeleteImage(public_id)
    if(Result){
        return true
    }else{
        return false
    }
}

export const uploadFile = async (
    files : UploadFileI,
    folderName : string
    ) =>{  
        const {createReadStream,filename} = await files

       let public_id = '',
        url  = '',
        secureUrl  = '',
        bytes  = 0,
        extension  = ''

    const cloudinaryUpload = async (Stream: typeof createReadStream ) => {
        try {
            await new Promise((resolve, reject) => {
                const streamLoad = cloudinary.v2.uploader.upload_stream({
                    public_id: `${uuid.v4()}`, 
                    folder:`FoodShop/${folderName}`,
                    transformation :{
                        // quality : "auto",
                        fetch_format : "auto"
                    }
                },function (error, data) {
                    if (data) {
                        public_id = data?.public_id,
                        url = data?.url,
                        secureUrl = data?.secure_url,
                        bytes = data?.bytes,
                        extension = data?.format
                        resolve({
                            public_id,url,secureUrl,bytes ,extension 
                        })
                    } else {
                        reject(error);
                    }
                });

             Stream().pipe(streamLoad);
            });
        }
        catch (err) {
            throw new Error(`Failed to upload profile picture ! Err:${err}`);
        }
    };

    await cloudinaryUpload(createReadStream) 
    return({ public_id,url,secureUrl,bytes ,extension })
        
} 

export const uploadFileBase64 = async (
    baseUrl : string,
    folderName : string
    ) =>{  

                    const streamLoad = await cloudinary.v2.uploader.upload(baseUrl,{
                        public_id: `${uuid.v4()}`, 
                        folder:`FoodShop/${folderName}`,
                        transformation :{
                            // quality : "auto",
                            fetch_format : "auto"
                        } 
                    });


                    return{
                        public_id : streamLoad.public_id,
                        url  : streamLoad.url,
                        secureUrl  : streamLoad.secure_url,
                        bytes  : streamLoad.bytes,
                        extension  : streamLoad.format
                    }

     
        }
 







