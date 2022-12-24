import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() ((theme) => {
    return{
        buttonBack :{
            fontFamily :"Poppins",
            textTransform :"capitalize",
            color :"#353945",
            borderColor :theme.palette.neutrals.veryYoungGrey,
            borderRadius :".4rem",
            fontSize :".9rem",
            margin :"0 1.5rem",
            "&:hover" :{
                borderColor : theme.palette.myColor.green,
                backgroundColor :theme.palette.myColor.greenTrans,
            }
        },
        coba :{
            width:"100px",
            height:"100px",
            backgroundColor:"blue"
        }
    }
})
export default useStyles