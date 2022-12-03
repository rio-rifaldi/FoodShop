import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import AllBlogPost from "./component/AllBlogPost"
import FindByCategory from "./component/FindByCategory"
import FindByUserInterface from "./component/FindByUserInterface"
import Head from "./component/Head"
import RecentBlogPost from "./component/RecentBlogPost"
import SearchebleBlog from "./component/SearchebleBlog"

type outputForm ={
  query : string
}
function Blog() {
  const [query, setQuery] = useState('')
  console.log(query)
  const setQuerySearch =useCallback((query:string) => {
    setQuery(query)
  },[])
  return (
    <>
        < Head  />
        < FindByUserInterface setQuerySearch={setQuerySearch} />
        {
          query ?(
            < SearchebleBlog query={query} />
          ):(
            <>
                < RecentBlogPost />
                < AllBlogPost /> 
            </>
          )
        }
        < FindByCategory />
    </>
  )
}

export default Blog