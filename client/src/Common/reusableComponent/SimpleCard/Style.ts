import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
      Card :{
        "& .MuiCardActionArea-root:hover > img":{
          transform :"scale(1.08)",
        },
        "& .MuiCardActionArea-root > img":{
          transition :"transform .5s ease-in-out"
        },
        "& .Mui-focusVisible.MuiCardActionArea-root > img":{
          transform :"scale(1.08)",
          transition :"transform .5s ease-in-out"
        },
        "& .MuiCardActionArea-root > span":{
            display :"none"
        },
        
        [theme.breakpoints.up(800)]:{
          maxWidth : "13.5rem"
        },
        boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius : ".3rem",
        transition :"transform .2s ease-in-out",
        padding:"0",
        position : 'relative',
      },
  
      iconButton:{
        position : "absolute",
        zIndex : 10,
        right : ".1rem"
      } 
  
    }
  })
  export default useStyles