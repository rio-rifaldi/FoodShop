import { CheckCircle, Close, RadioButtonUnchecked } from '@mui/icons-material';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import useDeletePayment from 'pages/CheckOut/Utils/Hooks/useDeletePayment';
import { useRef } from 'react';
import { makeStyles } from 'tss-react/mui';

type address ={
  _id: string,
  detailAddress: string;
  paymentMethod: string;
}
type Props = {
  address:address
  value:string
  handleChange:(arg: string) => void
}
const useStyles = makeStyles() ((theme) => {
    return{
        mainContainer:{
          padding:".5rem",py:"1rem",borderRadius:".4rem",position:'relative',boxSizing:"border-box",cursor:"pointer",
          [theme.breakpoints.up(410)]:{
            maxWidth:"20rem"
          }
        }
        
    }
})

const AddressCard = ({address,handleChange,value}:Props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const {deletepayment} = useDeletePayment()
    const checkRef = useRef<HTMLInputElement>(null)
    const isChecked = value.includes(address._id)
    const {classes} = useStyles()
    const onSelectAddress = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
      handleChange(address._id)
    }
    const onDeleteAddress = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      deletepayment(address._id) 
    }
    const onMouseOver = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
      e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px";
    }
    const onMouseOut = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
      e.currentTarget.style.boxShadow = "unset"
    }
  return (
    
    <Box sx={{outline: isChecked ? "2px solid #04B90B" : ".8px solid #777E90",opacity: isChecked ? 1 : .7 }} key={value} onClick={onSelectAddress} className={classes.mainContainer} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>  
    <IconButton sx={{position:"absolute",right:".2rem",top:".1rem"}} size="small"  onClick={onDeleteAddress}> 
        < Close fontSize="small"/>
     </IconButton>    
      <Typography sx={{fontSize:".85rem",fontWeight: isChecked ? "bolder" : undefined}} > {address.paymentMethod} </Typography>

      <Typography sx={{fontSize:".85rem",color: isChecked ? "black" : "neutrals.grey"}}> {address.detailAddress}</Typography>
      
        < Checkbox
              {...label}
              icon={<RadioButtonUnchecked color='disabled' />}
              checkedIcon={<CheckCircle color='secondary' />}
              size="small"
              sx={{position:"absolute",right:"-.1rem",bottom:"-.2rem"}}  
              checked={value.includes(address._id)}
              inputRef={checkRef}
              id="subscribe" name="subscribe"
              
        />
      </Box>
  
  )
}

export default  AddressCard