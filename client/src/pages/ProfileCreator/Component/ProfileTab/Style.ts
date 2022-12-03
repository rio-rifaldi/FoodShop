import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        container:{
            margin:"1.5rem .6rem",
            [theme.breakpoints.up(1020)]:{
                margin:"1.5rem auto",
                maxWidth:"57rem"
            },
        },
        Tabs:{
            "& .MuiTabs-flexContainer":{justifyContent:"center",gap:".3rem"},
            "& button.Mui-selected":{backgroundColor:"rgba(4, 185, 11,.7)"},
            "& .mui-1aquho2-MuiTabs-indicator":{backgroundColor:theme.palette.myColor.green},
            "& button" :{
              textTransform:"capitalize",
              fontSize :".94rem",
              padding :".1rem .6rem",
              minHeight:"2.5rem"
            }    
        }

    }
})
export default useStyles