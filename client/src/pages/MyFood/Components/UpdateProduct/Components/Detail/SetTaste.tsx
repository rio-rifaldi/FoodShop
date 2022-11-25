import { useQuery } from "@apollo/client";
import { ProductDetail } from "pages/MyFood/Utils/Graphql";
import { ProductI } from "pages/MyFood/Utils/Interfaces";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useFoodTaste = () =>  {
    const [taste, setTaste] = useState<string[] >([])
    const {productId} = useParams()
    const {data,loading} = useQuery<ProductI>(ProductDetail,{
       variables : {
          productId
       },
       initialFetchPolicy:"network-only"
    })

    useEffect(() => {
        if(!loading){
           setTaste(data?.Product.taste as string[])
        }
      }, [loading])

      return {taste, setTaste}
} 

export default useFoodTaste