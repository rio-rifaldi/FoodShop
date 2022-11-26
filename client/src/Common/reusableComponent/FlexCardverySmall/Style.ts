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
            maxWidth :"27rem",
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
            width:"7rem"
        },
        typographyDate :{                                                   
            listStyle :"circle",
            fontSize :".74rem",
            color :theme.palette.neutrals.grey,
            [theme.breakpoints.down('mobile')]:{
                display:"none"
            }
        },
        typographyHead :{
            fontSize :"1rem",
            color : theme.palette.neutrals.darkBlue,
            fontWeight : 500
        },
        typographyPara :{
            color :theme.palette.neutrals.grey,
            fontSize:".85rem",
            marginTop :".3rem ",
        },
        cardActions :{
            "&":{
                marginTop:"-0.6rem  ",
                display :"flex",
                justifyContent :"flex-end",
            },
            [theme.breakpoints.down('mobile')]:{
                "& .MuiChip-root":{
                    fontSize :".7rem",
                    transform :"translateX(1rem)"
                }
            }
        },
        ...ChipStyle,
        cardActionArea :{
            display :"flex",
            alignItems :"center",
        }
    }
})
export default useStyles