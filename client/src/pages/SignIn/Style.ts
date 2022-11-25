import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        mainContainer :{
          display :"flex",
          flexDirection :"column",
          alignItems :"center",
          margin :"5rem 0 ",
          [theme.breakpoints.up('md')]:{
            height :"80vh",
            flexDirection :"row",
            justifyContent :"space-evenly",
           
          }
        },
        boxSignIn :{
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
        SignInImage :{
          margin :" 0 auto",
          display :"block",
          maxWidth :"30rem",
          [theme.breakpoints.up('md')]:{
            margin :0,
            maxWidth :"38rem",
          }
        },
        SignInTitle :{
          fontFamily : "Alice",
          fontWeight :"600",
          textAlign:"center",
          color : theme.palette.neutrals.black,
          margin :'1rem 0 2rem 0',
          fontSize :"2.3rem " ,
          display :"none",
          [theme.breakpoints.up('md')]:{
            display :"block"
          }
        },
        SignInTitleMobile :{
          fontFamily : "Alice",
          fontWeight :"600",
          textAlign:"center",
          color : theme.palette.neutrals.black,
          fontSize :"2.3rem ",
          [theme.breakpoints.up('md')]:{
            display :"none"
          }
        },
        names:{
            width :"100%",
            display :"flex",
            flexDirection : "column",
            gap : "1.4rem",
            [theme.breakpoints.up(500)]:{
              flexDirection : 'row',
              gap :"1rem"
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
        wrapSignInWith :{
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
        fab :{
          boxShadow: "rgba(0, 0, 0, 0.13) 0px 3px 5px",
          backgroundColor : "white",
          borderRadius :" .4rem",
          textTransform :"capitalize"

        },
        textSignInWith :{
          fontFamily : "Alice",
          fontWeight :"500",
          textAlign:"center",
          color : theme.palette.neutrals.black,

      },
 
    }

})
export default useStyles