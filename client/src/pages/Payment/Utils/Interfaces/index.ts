export interface productCartListI{
    GetProductInCart:[{
        amount : number
        description:string
        productId : string
        product : {
            name: string,
            price : number,
            image :[{
                url: string
              }]
        }
    }]
}