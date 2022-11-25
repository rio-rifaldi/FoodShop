import { Box, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

import { makeStyles } from 'tss-react/mui'
import { ExpandMore } from '@mui/icons-material'
import {InputLabelProps} from '@mui/material/InputLabel'
import {SelectChangeEvent, SelectProps} from '@mui/material/Select'
import {FormControlProps} from '@mui/material/FormControl'


const useStyles = makeStyles() ((theme) =>{
    return{
        selectTag :{
            borderRadius :".7rem",
            height:"2.8rem",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline" :{
              border : `1.6px solid ${theme.palette.myColor.green}` 
            },
            "&:hover" :{"&& fieldset" :{
              border : `1.6px solid ${theme.palette.myColor.green}` 
            }}
          },
          placeholder :{
            color : theme.palette.neutrals.youngGrey,
            fontFamily :"Poppins",
            fontSize :'.8rem',
            position : "absolute",
            transform: "translate(.5rem,-.8rem)"
          },
          imageIcon :{
            width : "2.4rem",
            height:"2.4rem",
            margin : ".3rem 1rem",
          },
          listItemText :{
            display :"inline-block",
            marginTop:".7rem",
            fontSize:".86rem",
            verticalAlign :"top"
          },
          iconDown:{
            width:"1.5rem",
            color :theme.palette.neutrals.grey,
            transform:"translateX(-1rem)",
            position:"relative",
            zIndex:"-1"
          }
    }
})

  interface Props{
    icon:string[]
    menuList:string[]
    selectProps? :SelectProps<string> 
    inputLabelProps? :InputLabelProps
    formGroupProps?  :FormControlProps
    labelValue? :string,
    placeholder : string
  }

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
                    {/* <FormHelperText >
                    <Link underline='hover' href='#/' sx={{color:"myColor.green"}}> 
                        Add 1 Taste  < Add sx={{fontSize:".9rem",transform:"translateY(.2rem)",color:"myColor.green"}} />  
                    </Link>
                    </FormHelperText> */}
                </FormControl>
    </Box >
  )
}


export default DropDown