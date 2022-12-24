export interface Props{
    image :string,
    alt : string,
    price ?:number,
    rating : number,
    sold:number,
    labelRating: number,
    name : string,
    id ?: string,
    creator ?: boolean
  }