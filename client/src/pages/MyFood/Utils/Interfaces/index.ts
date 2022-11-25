export interface listProductI{
    ListProduct :[{
        _id : string,
        name: string,
        price : number,
        image :[ {
            url : string
        }]
    }]
}

export interface ProductI{
    Product:{
        _id: string,
        name: string,
        price: number,
        stock: number,
        expired:string,
        description: string,
        taste: [string],
        image:[ {
             url:string,
             public_id : string
        }]
    }
}

export interface FormUpdateI{
    name: string,
    price: number,
    stock: number,
    expired:string,
    description: string,
    taste: [string],
}