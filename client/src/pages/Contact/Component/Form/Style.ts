import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        mainContainer:{
          margin:"7rem 1.3rem 1.5rem 1.3rem",
            [theme.breakpoints.up('sm')]:{
              display :"flex",
            },
          [theme.breakpoints.up('md')]:{
             justifyContent :"center",
             gap :"5rem",
            alignItems :"center"

          }
        },
        image:{
          [theme.breakpoints.up('sm')]:{
            margin:"0 auto",
            maxWidth :"30rem"
          }
        },
        title:{
          fontFamily :"Alice",
          color : theme.palette.neutrals.black,
          textAlign:"left",
          fontSize:"3rem",
        },
        paragraf:{
          color :theme.palette.neutrals.grey,
          fontFamily:"Poppins",
          textAlign :"left",
        },
        mark:{
          color :theme.palette.myColor.green,
          fontFamily:"Poppins",
          backgroundColor:"transparent"
        },
        nameAndEmail:{
          display:'flex',
          gap:".7rem",
          flexDirection :"column",
          [theme.breakpoints.up('sm')]:{
            flexDirection :"row" , 
            justifyContent :"stretch",
            
          }
        },
        textContainer :{
          maxWidth :"35rem",
          marginBottom:"1rem"
        },
        form:{
          margin:"2rem 0",
          display:"flex",
          flexDirection :"column",
          gap:"1rem",
         
        },
        formWrap :{
          width :"100%",
          [theme.breakpoints.up('sm')] :{
            maxWidth :"38rem",
            margin :"0 auto"
          }
    
        }
    }

})
export default useStyles