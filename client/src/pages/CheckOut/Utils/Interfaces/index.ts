export interface productCartListI{
    GetProductInCart:[{
        productId : string,
        amount : number,
        name : string,
        price : number  
        imageUrl : string,

    }]
}