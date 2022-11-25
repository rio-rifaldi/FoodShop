import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        head :{
            fontFamily :"Poppins",
            color : theme.palette.neutrals.darkBlue,
            fontSize :"1.3rem",
            margin :"1.3rem"
        },
        cardContainer :{
            margin :"1.3rem auto",
            [theme.breakpoints.up('md')]:{
                display :"flex",
                justifyContent : "space-around"
            }
        }
    }
})

export default useStyles