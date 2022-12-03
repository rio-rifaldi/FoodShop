export interface ProductDetailI{
    Product:{
        _id : string,
        name : string,
        price : number,
        stock : number,
        expired :string,
        description : string,
        taste : [string],
        image :[{
          url : string
        }]
    }
}