import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
            mainContainer :{
                width : "100%",
                padding:".7rem",
                border :`1px solid ${theme.palette.neutrals.veryYoungGrey}`,
                borderRadius:".7rem",
               
                
            },
            imageAndNameContainer:{
                display :"flex",
            },  
            image:{
                width :"6rem",
                objectFit:"cover",
                borderRadius:".2rem"
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
                fontSize:"1rem",
                color :theme.palette.neutrals.black,
                fontWeight:500,
                fontFamily:"Alice",
            },
            price:{
                fontSize :"1.1rem",
                color : theme.palette.myColor.green,
                fontWeight:500,
                fontFamily:"Alice",
            },
            productCount:{
                color:theme.palette.neutrals.grey,
                fontSize:".8rem"
            }
    }
})
export default useStyles