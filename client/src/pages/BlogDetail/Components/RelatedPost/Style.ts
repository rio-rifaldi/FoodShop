import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        stackCard :{
            width : "100%",
            margin :"3rem auto",
            display :"flex",
            [theme.breakpoints.up('sm')]:{
                width :"94%"
            },
           ".slick-track":
            {
                alignItems :"center",
            },
            ".slick-slide":
            {
                height: "inherit ",
            },
            ".slick-slide > div":
            {
               margin :"0 5px"
            },
            ".slick-list" :{
              margin :"0 -5px"
            }
  
          }
    }
})
export default useStyles