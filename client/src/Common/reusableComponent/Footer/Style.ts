import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return {
        logo :{
            textAlign :"center"
        },
        textBox :{
            textAlign :"center",
            margin :"1rem",
            maxWidth :"25rem",
            alignSelf :"center",
            [theme.breakpoints.up('md')]:{
                transform :"scale(.95)"
            }
  
        },
        textUnderLogo :{
            textAlign :"center",
            fontFamily :"Poppins",
            color : theme.palette.neutrals.grey,
            fontSize :".84rem",
            margin :"1rem 0",
            lineHeight : "1.5rem"
        },
        details :{
            display : 'flex',
            flexWrap :"wrap",
            justifyContent :"center",
            alignItems :"center",
            gap :".7rem"
        },
        link :{
            textDecoration : 'none',
            color : theme.palette.neutrals.grey,
            fontFamily :"Poppins",
            fontSize : ".9rem"
        },
        containerText :{
            display :"flex",
            flexDirection :"column",
            gap :"1rem",
            fontFamily :"Poppins",

        },
        mainContainer :{
            display :"flex",
            flexDirection :"column",
            marginBottom : "1rem",
            gap :"1rem",
            [theme.breakpoints.up('md')]:{
                flexDirection :"row",   
                justifyContent : "center",
                transform :"scale(.9)"
            }
        },
        textWrap :{
            margin : "1rem 0",
            display :"flex",
            justifyContent :"space-around",

            flexGrow : 1    
        }
    }
})
export default useStyles