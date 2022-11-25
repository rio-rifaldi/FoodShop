import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() ((theme) =>{
    return{
        boxContainer:{
            maxWidth:"47rem",margin:"0 auto",display:"flex",flexDirection:"column",gap:".6rem"
        },
        boxField:{
            display:"flex",justifyContent:"space-between",margin:".2rem 0"
        },
        titleField:{
            fontFamily:"Alice",fontWeight:600
        },
        valueField:{
            fontFamily:"Alice",fontWeight:500,fontSize:".9rem",color:"neutrals.grey"
        }
    }
} )

export default useStyles