import { ExpandMore } from '@mui/icons-material'
import { Box, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'
import useStyles from './Style'
import { Props } from './Utils/Interfaces'




function FormWithtelp({menuTelp, selectProps, inputLabelProps,formGroupProps,textFieldProps,labelValue}:Props) {
    const {classes} = useStyles();
    const [select, setSelect] = useState<string>('')
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