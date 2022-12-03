import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
            mainContainer :{
                display :"flex",
                width : "100%",
                padding:".7rem",
                border :`1px solid ${theme.palette.neutrals.veryYoungGrey}`,
                borderRadius:".7rem",
                transform:"scale(.87)" 
            },
            image:{
                width :"9rem",
                objectFit:"cover"
            },
            titleStack:{
                flexDirection:"row",
                justifyContent:"space-between",
                width : "100%",
                alignItems :"center",
                marginBottom :"-.4rem"
            },
            counterBox:{
                display:"flex",
                gap:"1rem",
                alignItems:"center",
                marginTop:".7rem"
            },
            productName:{
                fontSize:"1.3rem",
                color :theme.palette.neutrals.black,
                fontWeight:500,
                fontFamily:"Alice",
            },
            price:{
                fontSize :"1.5rem",
                color : theme.palette.myColor.green,
                fontWeight:500,
                fontFamily:"Alice",
            }
    }
})
export default useStyles