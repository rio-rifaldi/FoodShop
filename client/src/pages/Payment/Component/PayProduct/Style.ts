import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{

        mainContainer :{
          margin :"2rem 0",
            [theme.breakpoints.up('sm')]:{
                display :"flex",
                width:"100%",
                justifyContent :"space-around",
                margin :"2rem .4rem 2rem .6rem"
            }
        },
        mainContainerForm :{
          width:"100%",
          [theme.breakpoints.up('md')]:{
            maxWidth :"37rem",
            marginTop:"2rem"
          }
        },
        mainContainerCheckOut:{
          width:"100%",
          [theme.breakpoints.up('md')]:{
            border:`1px solid ${theme.palette.neutrals.veryYoungGrey}`,
            borderRadius:".5rem",
            padding:".4rem", 
            maxWidth:"30rem"
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
       


    }
})
export default useStyles