import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        selectTag :{
            borderRadius :".7rem",
            height:"2.8rem",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
              border : `1.6px solid ${theme.palette.myColor.green}` 
            },
            "&:hover" :{"&& fieldset" :{
              border : `1.6px solid ${theme.palette.myColor.green}` 
            }}
          },
          placeholder :{
            color : theme.palette.neutrals.youngGrey,
            fontFamily :"Poppins",
            fontSize :'.8rem',
            position : "absolute",
            transform: "translate(.5rem,-.8rem)"
          },
          imageIcon :{
            width : "2.4rem",
            height:"2.4rem",
            margin : ".3rem 1rem",
          },
          listItemText :{
            display :"inline-block",
            marginTop:".7rem",
            fontSize:".86rem",
            verticalAlign :"top"
          },
          iconDown:{
            width:"1.5rem",
            color :theme.palette.neutrals.grey,
            transform:"translateX(-1rem)",
            position:"relative",
            zIndex:"-1"
          }
    }
})
export default useStyles