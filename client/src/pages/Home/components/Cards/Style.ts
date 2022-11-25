import { makeStyles } from "tss-react/mui"

  const useStyles = makeStyles() ((theme) =>{
    return{
      title :{
        fontFamily : 'Alice',fontSize : "clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",color : "#23262F",lineHeight :"5rem"
      },
      titleMark :{
        fontFamily : "Alice" ,color :theme.palette.myColor.green,fontSize : "clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",textAlign : "center" 
      },
      subTitle :{
        fontFamily : "Poppins",color : theme.palette.neutrals.grey,textAlign : "center",margin:"0 1rem",
        fontSize:"clamp(0.91rem, 0.8771rem + 0.1405vw, 1rem)"
      },
      stackCard :{
        [theme.breakpoints.up('sm')]:{
          width : '85%'             
        },
        margin :"3rem auto",

       ".slick-track":
        {
            display: "flex",
            alignItems :"center",
        },

      }
    }

})




export default useStyles