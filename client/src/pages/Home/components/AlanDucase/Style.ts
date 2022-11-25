import { makeStyles } from "tss-react/mui"
import arrow from "assets/images/svg/Arrow 2.svg"

const useStyles = makeStyles() ((theme) =>{
    return{
        TypographyTitle :{
            fontSize : "clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",color :"#23262F",fontFamily :"Alice",textAlign :"center"
        },
        TypographyTitleMark :{
            fontSize : "clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",backgroundColor:"transparent",color : theme.palette.myColor.green,fontFamily :"Alice"},

         textContainerHead :{
            display:"flex",justifyContent:"space-between",alignItems:"center",width :"100%"
        },
        mainContainer :{
            display :"flex",
            flexDirection :"column",

            [theme.breakpoints.up('md')]:{
                flexDirection :"row",
                justifyContent :"space-evenly",
                alignItems :"center"
            },
       
        },

        textHeader :{
            fontFamily :"Alice",color :theme.palette.myColor.green, fontSize:"1.3rem"
        },
        linkTop :{
            "&::after" : {
                content : `url('${arrow}')`,
                display :"inline-block",
                fontSize : ".1rem",
                verticalAlign :"middle",
                margin :"0 .5rem"
            },
            textDecoration :"none",
            color :theme.palette.myColor.green,
            fontSize : ".8rem",
            display :"none  ",
            [theme.breakpoints.up('sm')]:{
                display : "block"
            }
        },
        
        linkBottom :{
            "&::after" : {
                content : `url('${arrow}')`,
                display :"inline-block",
                fontSize : ".1rem",
                verticalAlign :"middle",
                margin :"0 .5rem"
            },
            textDecoration :"none",
            color :theme.palette.myColor.green,
            fontSize : ".8rem",
            marginLeft : "1rem",
            [theme.breakpoints.up('sm')]:{
                display :"none"
            }
        },

        paragraph :{
            color:"#353945" ,fontSize:"clamp(0.91rem, 0.8771rem + 0.1405vw, 1rem)",fontFamily:"Poppins",textAlign:"justify"
        },
        textContainer :{
            padding : "0 1rem",
            margin :"0 auto",
            maxWidth :"45rem",
            [theme.breakpoints.up('md')]:{
                maxWidth :"37rem"
            }
        },
        image :{
            margin:"0 auto",
            maxWidth :"17rem",
            [theme.breakpoints.up('md')]:{
                maxWidth : "28rem"
            }
        }
            
        }   

})

export default useStyles