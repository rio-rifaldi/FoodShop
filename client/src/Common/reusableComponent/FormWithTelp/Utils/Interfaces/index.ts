import { FormGroupProps, InputLabelProps, SelectProps, StandardTextFieldProps } from "@mui/material";

export interface Props{
    menuTelp: string[],
    selectProps?:SelectProps<string> ,
    inputLabelProps?:InputLabelProps,
    formGroupProps?:FormGroupProps,
    textFieldProps?:StandardTextFieldProps,
    labelValue?:string
}