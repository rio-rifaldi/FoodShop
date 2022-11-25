import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
      container :{
        [theme.breakpoints.down('xs')]:{
          margin :"2rem 0  0 1rem"
        }
      },
      tabs :{
          "&& .MuiTabs-flexContainer" :{
              justifyContent :"center",
              margin :".4rem auto",
              gap :"1rem",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
              width :"max-content",
              padding :".4rem",
              borderRadius :".4rem"
             
          },

          "& button":{
            fontSize :".8rem",
             padding :".7rem",
              minHeight :".7rem"
          }
      },
      selectTypeFood :{
        borderRadius :".7rem",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
          border : `1.6px solid ${theme.palette.myColor.green}` 
        },
        "&:hover" :{"&& fieldset" :{
          border : `1.6px solid ${theme.palette.myColor.green}` 
        }},
        "&":{ 
          color :theme.palette.neutrals.black,
          fontFamily :"Poppins",
          width :"95%",
        },

      },
      title :{
        fontFamily : 'Alice',fontSize : "2.5rem",color : "#23262F",lineHeight :"5rem"
      },
      titleMark :{
        fontFamily : "Alice" ,color :theme.palette.myColor.green,fontSize : "2.5rem",textAlign : "center"
      },
      subTitle :{
        fontFamily : "Poppins",color : theme.palette.neutrals.grey,textAlign : "center",margin:"0 1rem"
      },
      emptyDisplay :{
        color :theme.palette.neutrals.black,
        fontFamily :"Poppins",
        margin : 0,
        padding:0
      }
      
    }

})

export default useStyles