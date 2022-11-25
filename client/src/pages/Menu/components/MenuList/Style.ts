import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return {
        container:{

            display : "grid",
            gap :".3rem",
            padding :"0 .3rem",
            maxWidth :"40rem",
            gridTemplateColumns :"repeat(2,1fr)" ,
            [theme.breakpoints.up(500)]:{
              gridTemplateColumns :"repeat(3,1fr)" ,   
              margin:"0 auto"  
            },
            [theme.breakpoints.up(848)]:{
                maxWidth :"50rem",
                gap:".5rem",
              gridTemplateColumns :"repeat(4,1fr)" , 
            },
            [theme.breakpoints.up(908)]:{
                maxWidth :"68rem",
              gridTemplateColumns :"repeat(5,1fr)" , 
            }
        }
    }
})
export default useStyles