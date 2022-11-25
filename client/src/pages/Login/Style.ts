import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        mainContainer :{
          display :"flex",
          flexDirection :"column",
          alignItems :"center",
          margin :"1.5rem 0",
          gap : "3rem",
          [theme.breakpoints.up('md')]:{
            height :"80vh",
            gap : "1rem",
            flexDirection :"row",
            justifyContent :"space-evenly",
           
          }
        },
        boxLogin :{
          width:"100%",
          padding:"1rem 2rem",
          maxWidth :"35rem",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
  
        },
        form:{
          display :"flex",
          flexDirection : "column",
          gap : "1.4rem",
        },
        boxRegister :{
          display: "flex",
          justifyContent :"space-between",
          "& > a": {
            textDecoration :"none",
            color :theme.palette.neutrals.black,
            "&:hover":{
              color :"#551A8B"
            }
          }
        },
        loginImage :{
          margin :" 0 auto",
          display :"block",
          maxWidth :"25rem",
          [theme.breakpoints.up('md')]:{
            margin :0,
            maxWidth :"38rem",
          }
        },
        loginTitle :{
          fontFamily : "Alice",
          fontWeight :"600",
          textAlign:"center",
          color : theme.palette.neutrals.black,
          margin :'1rem 0',
          fontSize :"2.3rem " ,
          display :"none",
          [theme.breakpoints.up('md')]:{
            display :"block"
          }
        },
        loginTitleMobile :{
          fontFamily : "Alice",
          fontWeight :"600",
          textAlign:"center",
          color : theme.palette.neutrals.black,
          fontSize :"2.3rem ",
          [theme.breakpoints.up('md')]:{
            display :"none"
          }
        },
        checkbox :{
          justifySelf :"flex-start",
          alignSelf :"flex-start"
        },
        textField :{
          paddingLeft :"1.2rem",
          padding :",5rem"
        },
        wrapLoginWith :{
          display :"flex",
          flexDirection : "column",
          gap :'1rem',
          "& > button":{
            width :"100%",
          },
          [theme.breakpoints.up('smBlog')]:{
            flexDirection :"row",
            gap :"1.5rem"
          }
        },
        textLoginWith :{
            fontFamily : "Alice",
            fontWeight :"500",
            textAlign:"center",
            color : theme.palette.neutrals.black,

        },
        fab :{
          boxShadow: "rgba(0, 0, 0, 0.13) 0px 3px 5px",
          backgroundColor : "white",
          borderRadius :" .4rem",
          textTransform :"capitalize"

        }
 
    }

})

export default useStyles