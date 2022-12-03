import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() ((theme) =>{
    return{
        searchForm :{
            margin :"1rem",
            maxWidth :"38rem",
            [theme.breakpoints.up('sm')]:{
                width :"100%",
                margin :"auto"
            }
          },
          inputSearch :{
              "& .MuiOutlinedInput-root > fieldset":{
                border :"none",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            },
            "& .MuiOutlinedInput-root:hover > fieldset":{
                border :"none",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
            },
            "& .MuiOutlinedInput-root.Mui-focused":{
                "&  fieldset":{
                    border :"none",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
    
                }
            },
            "& .MuiOutlinedInput-root > input::placeholder":{
                fontSize :"clamp(0.8rem, 0.7598rem + 0.1717vw, 0.91rem)"
            }
          },
    }
} )

export default useStyles