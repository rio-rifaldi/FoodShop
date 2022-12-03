import axios from 'axios'
import { useEffect, useState } from 'react'
import { dataArticle } from '../Interfaces'

type Props = {
    page?:number,
    pageSize : number,
    category ?: "business" | "entertainment" | "general"| "health"|"science"| "sports"|"technology"
}
const Apikey = "1ebbbc780f9c4e5795e2ab56faca13e1"


function useFecthBlog(props?:Props) {
    const [article, setArticle] = useState<dataArticle>()

    const urlApi = `https://newsapi.org/v2/top-headlines?country=id&pageSize=${props?.pageSize}&page=${props?.page}&category=${props?.category ? props.category : "health"}&apiKey=${Apikey}`

    const fetchData = async () => {
        const {data,status} = await axios.get<dataArticle>(urlApi,{
            
        })
        if(status === 200){
            setArticle(data)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [props?.page])
    
    return article
}

export default useFecthBlog