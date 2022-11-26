import { FormControlProps, InputLabelProps, SelectProps } from "@mui/material"

export interface Props{
    icon:string[]
    menuList:string[]
    selectProps? :SelectProps<string> 
    inputLabelProps? :InputLabelProps
    formGroupProps?  :FormControlProps
    labelValue? :string,
    placeholder : string
  }