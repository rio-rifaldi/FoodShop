import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{

        mainContainer :{
          margin :"2rem 0",
            [theme.breakpoints.up('sm')]:{
                display :"flex",
                width:"100%",
                justifyContent :"space-evenly",
                margin :"2rem .4rem 2rem .6rem"
            }
        },
        mainContainerForm :{
          width:"100%",
          [theme.breakpoints.up('md')]:{
            maxWidth :"40rem",
            marginTop:"2rem"
          }
        },
        title:{
          fontFamily :"Alice",
          color : theme.palette.neutrals.black,
          textAlign:"left",
          fontSize:"2rem",
          margin:"0 1rem"
        },
        paragraf:{
          color :theme.palette.neutrals.grey,
          fontSize:".86rem",
          fontFamily:"Poppins",
          textAlign :"left",
          margin:"0 1rem"
        },
        mainContainerCheckOut:{
          width:"100%",
          border :`2px solid ${theme.palette.neutrals.veryYoungGrey}`,
          borderRadius :".6rem",
          
          display:"flex",
          flexDirection:"column",
          [theme.breakpoints.up(400)]:{
            maxWidth:"40rem",
            margin :"1rem auto",
            padding:"1rem",
          }

        },
        buttonBack :{
            fontFamily :"Poppins",
            textTransform :"capitalize",
            color :"#353945",
            borderColor :theme.palette.neutrals.veryYoungGrey,
            borderRadius :".4rem",
            fontSize :".9rem",
            margin :"0 1.5rem",
            "&:hover" :{
                borderColor : theme.palette.myColor.green,
                backgroundColor :theme.palette.myColor.greenTrans,
            }
        },
        addressBox:{
          margin:"0 .6rem",
          display : "grid",
          gap: ".3rem",
          justifyContent:"center",

          [theme.breakpoints.up(700)]:{
            gap: ".8rem",
            gridTemplateColumns:"repeat(2,1fr)"
          },
          [theme.breakpoints.up(960)]:{
            gridTemplateColumns:"repeat(4,1fr)"
          }
        },
  
        


    }
})
export default useStyles