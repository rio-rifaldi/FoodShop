import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        title:{
            fontFamily :"Alice",
            color : theme.palette.neutrals.black,
            textAlign:"left",
            fontSize:"2.3rem",
            margin:"0 1rem"
          },
          paragraf:{
            color :theme.palette.neutrals.grey,
            fontSize:"1rem",
            fontFamily:"Poppins",
            textAlign :"left",
            margin:"0 1rem"
          },
          nameAndTelp:{
            display:'flex',
            gap:".8rem",
            flexDirection :"column",
            [theme.breakpoints.up('md')]:{
              flexDirection :"row" , 
              justifyContent :"stretch",
              
            }
          },
          form:{
            margin:"2rem 1rem",
            display :"flex",
            flexDirection :'column',
            gap :".8rem"
          },
         
    }
})
export default useStyles