import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        select :{
        height :"2rem",
        position :"absolute",
        top:3,
        left:2,
        zIndex:2,

         "&":{
            ".mui-yehqz1-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.mui-yehqz1-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.mui-yehqz1-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
                paddingRight:"1.7rem",
            },
            "&& fieldset" :{
                border : "none" ,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
                border : `none` 
                },

            "svg":{
                position:"absolute",
                left:"2.7rem",
                zIndex:"-1"
            },
            ":hover" :{
                "&& fieldset" :{
                    border : "none" ,
             }
            },

         }
        },
        iconDown:{
            width:"1rem"
        }
    }

})
export default useStyles