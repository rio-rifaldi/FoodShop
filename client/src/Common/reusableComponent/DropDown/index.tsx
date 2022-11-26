import { Box, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { ExpandMore } from '@mui/icons-material'
import { SelectChangeEvent } from '@mui/material/Select'
import useStyles from './Style'
import { Props } from './Utils/Interfaces'






function DropDown({icon,menuList,selectProps,inputLabelProps,formGroupProps,placeholder,labelValue}:Props) {
    const [select, setSelect] = useState('')
    const {classes} = useStyles()
    const selectHandler = (event:SelectChangeEvent<string>) =>{
        setSelect(event.target.value)
    } 
  return (
    <Box sx={{width:"100%"}}>
        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}} htmlFor='select-meal' {...inputLabelProps}> {labelValue ? labelValue : null} </InputLabel>
    <FormControl {...formGroupProps}> 
                    <Select
                      {...selectProps}
                      displayEmpty
                      labelId='select-meal'
                      id='meal'
                      onChange={selectHandler}
                      className={classes.selectTag}
                      value={select}
                    size='small'
                    variant='outlined'
                    IconComponent={() => < ExpandMore className={classes.iconDown}/>}
                    renderValue={
                        select !== "" ? undefined : () =>  <p className={classes.placeholder}>{placeholder ? placeholder : "What’s your Taste?"}</p>
                    }     
                    >              
                    {
                        menuList.map((el,index) =>{
                            return(

                          <MenuItem value={index + 1} key={index} > 
                                <ListItemIcon > <img src={icon[index]} alt={icon[index]} className={classes.imageIcon} /> </ListItemIcon>
                                <ListItemText className={classes.listItemText} disableTypography > {el} </ListItemText>
                            </MenuItem>
                            )
                        } )
                    }        
            
                    </Select> 
                </FormControl>
    </Box >
  )
}


export default DropDown