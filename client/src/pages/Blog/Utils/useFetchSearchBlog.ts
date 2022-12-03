import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { dataArticle } from '../component/AllBlogPost/Utils/Interfaces'

type Props = {
    page?:number,
    pageSize : number,
    query : string
}
const Apikey = "1ebbbc780f9c4e5795e2ab56faca13e1"


function useFetchSearch(props?:Props) {
    const [article, setArticle] = useState<dataArticle>()

    const urlApi = `https://newsapi.org/v2/everything?q=${props?.query}&pageSize=${props?.pageSize}&page=${props?.page}&apiKey=${Apikey}`

    const fetchData = useCallback(async () => {
        const {data,status} = await axios.get<dataArticle>(urlApi,{
            
        })
        if(status === 200){
            setArticle(data)
        }
    },[props?.page,props?.query])
    
    useEffect(() => {
        fetchData()
    }, [props?.page,props?.query])
    
    return article
}

export default useFetchSearch