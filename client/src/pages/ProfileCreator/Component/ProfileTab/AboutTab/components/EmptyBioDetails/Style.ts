import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
      container :{
        display:"flex",
        flexDirection:"column",
        justifyContent :"center",
        gap:"1rem"
      },
      image:{
        width : "12rem",
        display:"block",
        margin : "1rem auto .3rem auto",
        [theme.breakpoints.up(750)]:{
          marginTop:"2rem",
          width :"17rem"
        }
      },
      text:{
        fontFamily :"Alice",
        color :theme.palette.neutrals.grey,
        textAlign:"center",
        fontSize:"1rem",

      },
      button:{
        width:"6rem",
        margin :"0 auto"
      }
    }
})
export default useStyles