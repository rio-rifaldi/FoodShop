import ChipStyle from "pages/Blog/Utils/ChipStyle"
import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        ...ChipStyle,
        mainContainer :{
            margin :".7rem 1.6rem",
            fontFamily :"Poppins",
            color :"#353945"
        },
        mainContent :{
            margin :"2rem auto",
            [theme.breakpoints.up('sm')]:{
                maxWidth :"80%"
            },
            [theme.breakpoints.up('md')]:{
                maxWidth :"53rem",
            }
        },
        imageHead :{
            width :"100%",
            borderRadius :".5rem",
        },
        chipWrrap :{
            display :"flex",
            justifyContent :" flex-end",
            gap :"1rem",
            margin :".67rem 0"
        },
        imageBox :{
            maxWidth :"100%",
            margin :"1rem auto .6rem auto",
            [theme.breakpoints.up('sm')]:{
                maxWidth :"90%",
            },
            [theme.breakpoints.up('md')]:{
                maxWidth :"75%",
            }
            // margin :"1rem auto .6rem auto"
        },
        title :{
            fontSize :"1.4rem",
            fontWeight :"600",
            marginTop :".6rem"
        },
        time :{
            fontSize :".82rem",
            color : theme.palette.neutrals.grey,
            marginLeft :".9rem",
            marginBottom :"1.5rem"
        },
        subTitle :{
            fontSize :"1.19rem",
            fontWeight :"500",
            margin:".5rem 0"
        },
        paragraf :{
            margin :".8rem 0",
            fontWeight :"400",
            textAlign :"justify",
            
        },
        span:{
            fontWeight :"600",
        },
        markLink :{
            textDecoration :"none",
            color :theme.palette.myColor.green,
        },
        vegetables :{
            margin :"2rem auto",
            display :"block",
            width :"14rem",
            [theme.breakpoints.up('sm')]:{
                marginLeft :"2.2rem",
                float :"right"
            },
            [theme.breakpoints.up('md')]:{
                width :"18rem",
            }
        }
    }
})
export default useStyles