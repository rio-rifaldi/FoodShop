import { Box, Pagination, Typography, useMediaQuery } from '@mui/material';
import FlexCardSmall from 'Common/reusableComponent/FlexCardSmall';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Style';
import useFecthBlog from './Utils/Hooks/useFecthBlog';



function AllBlogPost() {
    const {classes,theme} = useStyles();
    const dekstop = useMediaQuery(theme.breakpoints.up(820))
    const [index, setIndex] = useState(1)
    const refToTop = useRef<null | HTMLElement>(null)

    let pageSize = dekstop ? 10 : 5

        const article = useFecthBlog({page:index,pageSize})

        const onChangePagination = useCallback((e:unknown,p:number) => {
            console.log(p);
            setIndex(p)
            refToTop.current?.scrollIntoView({behavior: "smooth", block: "start"});
        },[article])
        console.log(article)   
  return (
    <Box ref={refToTop}> 
        <Typography component={'h1'} className={classes.head} id='all-Blog-Post' > All Blog Post </Typography>
        <Box className={classes.cardContainer}   > 

        <Box className={classes.cardContainerRight}>  
            {
            article?.articles.slice(0,5).map((blog) =>{
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
            </Box>

            <Box className={classes.cardContainerLeft} > 
                {
                    dekstop &&(
                    <>              
                        {
                            article?.articles.slice(5,10).map((blog) =>{
                                return(
                                    < FlexCardSmall 
                                        small
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
                    )
                }
             </Box>
        </Box>
                {
                    article?.totalResults &&(
                        < Pagination count={Math.ceil(article?.totalResults / pageSize)} color='secondary' className={classes.pagination} onChange={onChangePagination}/>
                    )
                }
     </Box>
    )
}

export default AllBlogPost


