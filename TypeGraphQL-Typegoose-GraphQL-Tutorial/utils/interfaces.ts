import { Stream } from "stream";


export interface UploadFileI{
    filename: string,
    mimetype: string,
    encoding : string,
    createReadStream : () => Stream
}

export interface imageI { 
    public_id : string  | undefined,
    url : string | undefined,
    secureUrl : string | undefined,
    extension : string | undefined,
    bytes : number | undefined
}
