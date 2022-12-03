import { Box, Pagination, Typography, useMediaQuery, useTheme } from '@mui/material'
import FlexCardSmall from 'Common/reusableComponent/FlexCardSmall'
import useFetchSearch from 'pages/Blog/Utils/useFetchSearchBlog'
import React, { useCallback, useRef, useState } from 'react'
import imageBlog from 'assets/images/svg/blog_creating.svg'

type Props = {
    query : string
}

function SearchebleBlog({query}: Props) {
  const [index, setIndex] = useState(1)
  const refToTop = useRef<null | HTMLElement>(null)
  const theme = useTheme();
  const dekstop = useMediaQuery(theme.breakpoints.up(820))
  let pageSize = dekstop ? 16 : 8
  const article = useFetchSearch({pageSize:dekstop ? 16 : 8,query,page:index})


    const onChangePagination = useCallback((e:unknown,p:number) => {
      console.log(p);
      setIndex(p)
      refToTop.current?.scrollIntoView({behavior: "smooth", block: "start"});
  },[article])
  console.log(article) 
  return (
    <>
    {
      article?.totalResults === 0 &&(
            <>
              <Box sx={{maxWidth:{xsMenu:"14rem",sm:"18rem"},margin:"0 auto",marginTop:"5rem"}}>  
                    <img src={imageBlog} alt="Blog comming Soon" style={{
                      width: '100%'
                    }}  />  
                </Box>
                  <Typography sx={{
                  textAlign :"center",
                  marginTop: "1.2rem",
                  color : "neutrals.black",
                  fontWeight: "bold",
                  }} > 
                      News not Found
                    </Typography>

            </>
      )
    }
      <Box sx={{
        display: 'grid',
        gridTemplateColumns : {xsMenu:"1fr",md:"repeat(2,1fr)"},
        alignItems :"center",
        justifyContent :"center",
        gap :"1rem",
        marginTop:"4rem",
        mx:{xsMenu:".5rem",md:"auto"}
      }} ref={refToTop}> 
      {
          <>
              {
                   article?.articles &&
                   article.articles.map((blog) => {
                       return(
                         < FlexCardSmall
                         content={blog.description}
                         publishedAt={blog.publishedAt}
                         title={blog.title}
                         urlToImage={blog.urlToImage}
                         url={blog.url}
                     />
                       )
                   } )
              }
          </>   
      }

       </Box>
      {  
        article?.totalResults && article.totalResults >= 1 &&(
            < Pagination count={Math.ceil(article?.totalResults / pageSize)} color='secondary' onChange={onChangePagination}/>
        )
      }
    </>
    )
}

export default SearchebleBlog