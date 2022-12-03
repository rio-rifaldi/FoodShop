import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{

    return{
      slider :{ 
        margin :"2rem 0",
        paddingBottom :"2rem",
        [theme.breakpoints.up('md')]:{
          width :"30rem"
        },
        [theme.breakpoints.up('mdMenu')]:{
          width :"40rem"
        },
          "& .slick-dots.slick-thumb":{ 
            display :"flex",
            textAlign :"right",
            right :"1rem",
            "& li":{
              margin :"2rem 1rem",
  
              "&.slick-active > img":{
                opacity :".6"
              },
  
              "& > img":{
                width :"2rem",
              }
            }
          }
        },
        imageContainer :{
          objectFit : "cover",
          // objectPosition :"center",
          // display :"inline-block",
          // margin :"auto"
        }
  
    }
  })
  
  export default useStyles