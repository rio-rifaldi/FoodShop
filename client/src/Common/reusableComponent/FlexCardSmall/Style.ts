import ChipStyle from "pages/Blog/Utils/ChipStyle"
import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{

    return{
        stackHeader :{
            flexDirection :"row",
            justifyContent :"space-between",
            margin : '1.3rem'
        },
        viewAll:{
            textDecoration :"none",
            color :theme.palette.myColor.green,
            fontSize :"1rem",
            [theme.breakpoints.up('sm')]:{
                display :'none'
            }
        },
        card :{
            fontFamily :"Poppins",
            margin : "0 1.3rem",
            maxWidth :"35rem",
            boxShadow :"none",

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
            // minWidth : "5rem",
            [theme.breakpoints.between(0,400)]:{
                height :"9rem",
            },
            [theme.breakpoints.up(400)]:{
                maxHeight :"10rem",
                maxWidth : "12rem",
            },
            objectFit: "cover",
        },
        typographyDate :{
            listStyle :"circle",
            fontSize :".74rem",
            color :theme.palette.neutrals.grey
        },
        typographyHead :{
            fontSize :"1.1rem",
            color : theme.palette.neutrals.darkBlue,
            fontWeight : 500
        },
        typographyPara :{
            color :theme.palette.neutrals.grey,
            fontSize:".9rem",
            marginTop :".6rem ",
        },
        cardActions :{
            marginBottom :"1rem",
            display :"flex",
            justifyContent :"center",
            paddingLeft :"6rem"
        },
        ...ChipStyle,
        cardActionArea :{
            [theme.breakpoints.up(400)]:{
                display :"flex",
                alignItems:'flex-start',
            },
        }
    }
})
export default useStyles