export interface Props{
    image :string,
    alt : string,
    price ?:number,
    rating : number,
    labelRating: number,
    name : string,
    id ?: string,
    creator ?: boolean
  }