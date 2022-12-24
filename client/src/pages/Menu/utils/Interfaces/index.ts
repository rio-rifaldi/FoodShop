export interface ProductI {
    GetAllProduct:[{
        _id : string,
        name : string,
        price : number,
        rating : number,
        sold: number,
        image:[{
            url : string,
        }]
    }]
}