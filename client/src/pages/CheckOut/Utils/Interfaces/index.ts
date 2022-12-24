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
export interface outputForm {
    paymentMethod: number,
    detailAddress : string
}
export interface paymentI{
    getUser:{
        payment:[{
            _id: string,
            detailAddress: string
            paymentMethod: string
        }]
    }
}