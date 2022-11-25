
import ChipStyle from "pages/Blog/Utils/ChipStyle"
import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        stackHeader :{
            flexDirection :"row",
            justifyContent :"space-between",
            margin : '1.3rem',

        },
        viewAll:{
            textDecoration :"none",
            color :theme.palette.myColor.green,
            fontSize :"1rem",
            [theme.breakpoints.up('md')]:{
                display :'none'
            }
        },
        viewAllBottom:{
            textDecoration :"none",
            color :theme.palette.myColor.green,
            fontSize :"1rem",
            textAlign : "right",
            minWidth :"100%",
            border :"1px solid red",
        },
        card :{
            fontFamily :"Poppins",
            margin : "0 1.3rem",
            maxWidth :"40rem",
            boxShadow:"none",
            [theme.breakpoints.up('sm')]:{
                margin :"0 auto"
            },
            [theme.breakpoints.up('md')]:{
                margin:"unset",
                width :"30rem",
            },
            "& .MuiCardActionArea-root":{
                ":hover > img":{
                    transform :"scale(1.08)",
                },
                "& > img":{
                    transition :"transform .5s ease-in-out",
                    transform: "translateZ(0)",
                    willChange: "transform",
                    WebkitBackfaceVisibility: "hidden",
                    imageRendering :"pixelated"
                },
                 "&.Mui-focusVisible > img":{
                    transform :"scale(1.08)",
                 },
                 "& > span":{
                    display :"none"
                 },
                 "&":{
                    transform: "translateZ(0)",
                    willChange: "transform",
                    WebkitBackfaceVisibility: "hidden",
                    WebkitFontSmoothing :"subpixel-antialiased",
                 }
              }
        },
        cardMedia :{
            margin :"0 auto"
        },
        typographyDate :{
            listStyle :"circle",
            margin :".8rem 0 0 1.3rem",
            fontSize :".8rem",
            color :theme.palette.neutrals.grey
        },
        typographyHead :{
            fontSize :"1.5rem",
            color : theme.palette.neutrals.darkBlue
        },
        typographyPara :{
            color :theme.palette.neutrals.grey,
            marginTop :"1rem "
        },
        cardActions :{
            marginBottom :"1rem"
        },
        ...ChipStyle
    }
})

export default useStyles