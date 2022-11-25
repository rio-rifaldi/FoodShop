import React, { useState } from 'react'
import { Box, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { makeStyles } from "tss-react/mui"
import { ExpandMore } from '@mui/icons-material'
import {InputLabelProps} from '@mui/material/InputLabel'
import {SelectProps} from '@mui/material/Select'
import {FormGroupProps} from '@mui/material/FormGroup'
import {StandardTextFieldProps} from '@mui/material/TextField'

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

interface Props{
    menuTelp: string[],
    selectProps?:SelectProps<string> ,
    inputLabelProps?:InputLabelProps,
    formGroupProps?:FormGroupProps,
    textFieldProps?:StandardTextFieldProps,
    labelValue?:string
}
function FormWithtelp({menuTelp, selectProps, inputLabelProps,formGroupProps,textFieldProps,labelValue}:Props) {
    const {classes} = useStyles();
    const [select, setSelect] = useState<string>('')
    console.log(menuTelp)
  return (
    <Box >
        <InputLabel  shrink  {...inputLabelProps}> {labelValue ? labelValue : "Phone Number"}  </InputLabel>
        <FormGroup sx={{position:"relative"}} {...formGroupProps}  >  

        <Select  size="small" className={classes.select} IconComponent={() => <ExpandMore fontSize='small' className={classes.iconDown}/>}
        displayEmpty
        // fullWidth
        onChange={(e) => setSelect(e.target.value) }    
        value={select}
        renderValue={
            select !== '' ? undefined : () => (<p style={{fontSize:".7rem",fontFamily:"Poppins",transform:"translate(.3rem)"}}>VN</p>)
        }
        {...selectProps}
        >  
         {
           menuTelp.map((el,index) => {
            return(
                <MenuItem value={index + 1} key={index}>{el} </MenuItem>    
            )
           }) 
        }
           
        </Select>


        < TextField
            {...textFieldProps}
            placeholder='phone number'
            size='small'
            InputProps={{
                style :{
                    paddingLeft:"3.5rem",
                },   
                type:"tel",
  
            }}
            
        />
     </FormGroup> 
      </Box>
  )
}

export default FormWithtelp