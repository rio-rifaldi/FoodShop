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
          payment:{
              display :"flex",
              flexDirection :"column" , 
              gap:".4rem",   
            [theme.breakpoints.up('md')]:{
                flexDirection :"row" , 
                justifyContent :"stretch",  
              }
          },
          boxImageVisa:{
            width:"10rem",
            // border :"1px solid grey",
            transform:"translateX(2rem)",
            alignSelf :"flex-end",
            [theme.breakpoints.up('md')]:{
                width :"15rem",
                alignSelf :"center",
                transform:"translate(2rem, 1rem)"
            }
          }
         
    }
})
export default useStyles