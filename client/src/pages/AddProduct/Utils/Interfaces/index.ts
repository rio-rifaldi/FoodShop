export interface dataInput  {
    name : string,
    price : number,
    stock : number,
    expired : string,
    taste : string[]
    description : string
  }

export interface formData {
    nameProduct : string,
    priceProduct :number,
    imageProduct : File[],
    stockProduct : number,
    expiredProduct : string,
    tasteProduct : string[],
    descriptionProduct : string  
  
  }
  