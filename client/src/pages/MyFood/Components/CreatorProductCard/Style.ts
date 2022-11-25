import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
      Card :{
  
        "& .MuiCardActionArea-root > span":{
            display :"none"
        },
        maxWidth : "13rem",
        height :"15.4rem",
  
        boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius : ".3rem",
        transition :"transform .2s ease-in-out",
        padding:"0",
        position : 'relative'
      },
  
      iconButton:{
        position : "absolute",
        zIndex : 10,
        right : ".1rem"
      },
      
      MenuPaperProps :{
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      }
  
    }
  })

  export default useStyles