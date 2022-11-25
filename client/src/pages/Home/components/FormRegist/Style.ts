import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return {
        TypographyTitle :{
          fontSize:"clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",fontFamily:"Alice",color:"#23262F",textAlign:"center"
        },
        TypographyTitleMark :{
          fontSize:"clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",fontFamily:"Alice",color:theme.palette.myColor.green ,textAlign:"center",backgroundColor:"transparent"
        },
        TypographyTitlePara :{
          color :"#777E90",textAlign:"center",maxWidth:"30rem",margin:".4rem auto",fontFamily:"Poppins",
          fontSize :"clamp(0.91rem, 0.8771rem + 0.1405vw, 1rem)"
        },
        imageIcon :{
          width : "1.5rem",
          margin : "0 1rem",
        },
        listItemText :{
          display :"inline",
          verticalAlign :"top"
        },
        selectTag :{
          borderRadius :".7rem",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
            border : `1.6px solid ${theme.palette.myColor.green}` 
          },
          "&:hover" :{"&& fieldset" :{
            border : `1.6px solid ${theme.palette.myColor.green}` 
          }}
        },
        selectNumberPhone :{
          borderRadius :".4rem",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
            border : `1.6px solid ${theme.palette.myColor.green}` 
          },
          "&:hover" :{
            "&& fieldset" :{
              border : `1.6px solid ${theme.palette.myColor.green}` 
          }
        },
          minWidth : "4.5rem"
        },
        selectPayment :{
          borderRadius :".5rem",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
            border : `1.6px solid ${theme.palette.myColor.green}` 
          },
          "&:hover" :{"&& fieldset" :{
            border : `1.6px solid ${theme.palette.myColor.green}` 
          }},
  
        },
        placeholder :{
          color : theme.palette.neutrals.youngGrey,
          fontFamily :"Poppins",
          fontSize :'.8rem',
          position : "absolute",
          transform: "translate(.5rem,-.8rem)"
        },
        placeholderPayment :{
          color : theme.palette.neutrals.youngGrey,
          fontFamily :"Poppins",
          fontSize :'.72rem',
          position : "absolute",
          transform: "translate(.5rem,-.8rem)"
        },
        imageKurir :{
          maxWidth :"28rem"
        },
        stackImageAndForm:{
          width :"100%",
           [theme.breakpoints.up('sm')]:{
              flexDirection :"row",
              justifyContent :"space-evenly",
              gap :"3rem"
            }
        },
        stackNameAndPhone :{
            gap :"1rem",
            margin :"1rem 0",
            [theme.breakpoints.up('md')]:{
              flexDirection :"row"
            }
        }
    }
  
  })

  export default useStyles