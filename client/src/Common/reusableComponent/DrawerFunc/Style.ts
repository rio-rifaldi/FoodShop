import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return {
          box:{
            width : "14rem",
          },
          boxLogo :{
            display :"flex",
            justifyContent :"space-between",
            alignItems :"center",
            margin :".5rem .3rem 2rem .3rem"
          },
          logo :{
            width : "5rem",
          },
          listItemText :{
            marginLeft : "1rem",
          },
          navLink :{
            color : theme.palette.neutrals.black,
            textDecoration:"none",
            width:"100%",
          }
    }
  })

  export default useStyles