export interface ProductI {
    GetAllProduct:[{
        _id : string,
        name : string,
        price : number,
        image:[{
            url : string,
        }]
    }]
}