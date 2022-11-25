import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()((theme) =>{
    return {
      boxEmptyImage :{
        margin : "0 auto 8rem auto",
        [theme.breakpoints.down(700)]:{
          marginTop:"3rem"
        }
      },
      imageEmpty :{
        maxWidth :"23rem",
        display :"block",
        margin : "0 auto",
        [theme.breakpoints.up(400)]:{
          minWidth :"34rem",
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
        marginTop:"5.5rem",
        "&:hover" :{
            borderColor : theme.palette.myColor.green,
            backgroundColor :theme.palette.myColor.greenTrans,
        }
  
    },
    cardListWrap:{
      display:"grid",gap:".4rem",gridTemplateColumns:"1fr 1fr",
      [theme.breakpoints.up(600)]:{
        display : 'flex',
        flexWrap : "wrap",
        gap:".7rem",
        justifyContent :"center",
      },

    }
  
    }
  } )

  export default useStyles