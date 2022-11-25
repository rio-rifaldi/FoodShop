import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        title :{
            fontFamily : 'Alice',fontSize : "clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",color : "#23262F",lineHeight :"5rem"
          },
          titleMark :{
            fontFamily : "Alice" ,color :theme.palette.myColor.green,fontSize : "clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)",textAlign : "center"
          },
          subTitle :{
            fontFamily : "Poppins",color : theme.palette.neutrals.grey,textAlign : "center",margin:"0 1rem",fontSize:"clamp(0.91rem, 0.8771rem + 0.1405vw, 1rem)"
          },
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
          mainContainer :{
            gap :"1rem",
            display :"flex",
            flexDirection :"column",
          },
    }

})
export default useStyles