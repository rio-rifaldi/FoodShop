import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        container :{
            [theme.breakpoints.up(750)]:{
                display : 'flex',
                justifyContent : 'center',
                gap : '3.5rem',
                maxWidth : "100%",
                margin : "0 auto"
            },
            [theme.breakpoints.up(1020)]:{
                maxWidth :"57rem"
            }
        },
        profileImageWrap : {
            [theme.breakpoints.up(750)]:{
                maxWidth :"30%"
            },
            alignSelf:"flex-end"
        },
        profileImage:{
            maxWidth:"10rem",display:"block",margin:"0 auto",borderRadius:"8rem",minHeight:"10rem",objectFit:"cover",objectPosition:"center"
        },
        iconButtonUpload :{
            margin:"0 auto",display:"block",transform:"translate(3.7rem,-3rem)",width :"2.4rem",height:"2.4rem",backgroundColor:"blue",
            position : "relative",zIndex :10
        },
        profileBioWrap:{
            display:"flex",justifyContent:"space-between",alignItems:"center"
        },
        profileNameWrap:{
            display:"flex",
            flexDirection:"column",
            [theme.breakpoints.up(460)]:{
                flexDirection:"row",
                alignItems:"center",
               gap :".8rem"
            }
        },
        name :{
            color :"neutrals.black",fontFamily:"Alice",fontSize:"1.3rem"
        },
        address :{
            fontSize :".72rem",fontFamily:"Poppins",color:"neutrals.grey",
            [theme.breakpoints.between(0,460)]:{
                marginBottom:".3rem"
            }
        },
        iconLocation:{
            verticalAlign:"top",fontSize:".9rem",color :"neutrals.grey"
        },
        profession:{
            fontSize :".7rem",color :"neutrals.grey",fontFamily:"Poppins"
        },
        ratingValue:{
            fontFamily:"Alice",fontSize:"1.3rem",color :"neutrals.black",display:"inline",verticalAlign:".3rem",marginLeft:".3rem"
        },
        description:{
            margin :".2rem",fontSize :".84rem",color :"neutrals.black",fontFamily:"alice",textIndent:"1rem",textAlign:"justify"
        },
        actionWrap:{
            display:'flex',alignItems:'center',marginTop:".8rem",justifyContent:"space-between"  
        }


    }
} ) 
export default useStyles