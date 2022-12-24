import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, InputLabel, Stack, TextField, useMediaQuery } from '@mui/material';
import dana from "assets/images/svg/DANA.svg";
import gopay from "assets/images/svg/GoPay.svg";
import master from "assets/images/svg/master.svg";
import shoope from "assets/images/svg/ShopeePay.svg";
import visa from "assets/images/svg/Visa.svg";
import DropDown from 'Common/reusableComponent/DropDown';
import useAddPayment from 'pages/CheckOut/Utils/Hooks/useAddPayment';
import { outputForm } from 'pages/CheckOut/Utils/Interfaces';
import { useForm } from 'react-hook-form';
import useStyles from "./Style";

type Props = {
    isOpen: boolean,
    setClose:() => void
}



function FormPayment({isOpen,setClose}: Props) {
    const {classes} = useStyles()
    const {register,handleSubmit,reset} = useForm<outputForm>()
    const {onsubmit} = useAddPayment({handleSubmit,setClose,reset})
    const mathes = useMediaQuery('(min-width:400px)')
    const onReset = () =>  reset()
  return (
    
    <Dialog
        open={isOpen}
        fullScreen={mathes ? false : true}
        scroll='body'
        onClose={setClose}
        PaperProps={{
            sx:{width:"93%",height:"max-content",borderRadius:".3rem",padding:0}
        }}
        
        

    > 
        <IconButton sx={{position:"absolute",right:"1rem",top:"1rem"}}  onClick={setClose}> 
            < Close />    
         </IconButton>
            <form action="" className={classes.form} onSubmit={onsubmit}>
        <DialogContent sx={{overflow:"hidden",padding:"0"}} > 

                <Box className={classes.payment} > 
                        < DropDown placeholder={"Credit card"} icon={[visa,master,shoope,gopay,dana]} 
                            labelValue={'Payment Method'}
                            menuList={['visa',"master","ShopeePay","GoPay","DANA"]}
                            formGroupProps={{fullWidth:true}}
                            selectProps={{required:true,...register('paymentMethod')}}
                        
                        />   
                        <Box className={classes.boxImageVisa} > 
                        <img src={visa} alt="visa" />    
                        <img src={master} alt="master" />    
                        </Box>
                </Box>
                    
                    <Box >     
                        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}
                        
                        > Your Detail Address </InputLabel>
                        < TextField placeholder='17 Acb Street' fullWidth size='small'
                            multiline
                            rows={4}    
                            required
                            {...register('detailAddress')}
                        />
                    </Box>                        
        </DialogContent>
        <DialogActions > 
                <Stack direction={'row'} gap={1}> 
                <Button variant='contained' color="error" type="reset" sx={{alignSelf:"flex-start"}}  onClick={onReset} size="small" >Dismis  </Button>
                <Button variant='contained' color="secondary" type="submit" sx={{alignSelf:"flex-start"}} size="small">Add  </Button>
                    </Stack>
        </DialogActions>
            </form>
     </Dialog>

  )
}

export default FormPayment