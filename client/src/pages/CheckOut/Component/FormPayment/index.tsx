import { Check } from '@mui/icons-material';
import { Box, Button, FormControlLabel, InputLabel, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import dana from "assets/images/svg/DANA.svg";
import gopay from "assets/images/svg/GoPay.svg";
import master from "assets/images/svg/master.svg";
import shoope from "assets/images/svg/ShopeePay.svg";
import visa from "assets/images/svg/Visa.svg";
import DropDown from 'Common/reusableComponent/DropDown';
import useStyles from "./Style";



function FormPayment() {
    const {classes} = useStyles()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' }, sx:{borderRadius:".9rem"} };
  return (
    <>
        <Typography component={'h1'} className={classes.title}> Comfirm and Pay </Typography>    
        <Typography className={classes.paragraf} >Horayy! This is last steps before enjoying your meal.</Typography>

        <form action="" className={classes.form}>

            <Box className={classes.payment} > 
                    < DropDown placeholder={"Credit card"} icon={[visa,master,shoope,gopay,dana]} 
                        labelValue={'Payment Method'}
                        menuList={['visa',"master","ShopeePay","GoPay","DANA"]}
                        formGroupProps={{fullWidth:true}}
                    />   
                    <Box className={classes.boxImageVisa} > 
                    <img src={visa} alt="visa" />    
                    <img src={master} alt="master" />    
                     </Box>
             </Box>
             <Box >     
                    <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Card number </InputLabel>
                    < TextField placeholder='1234 4567 1213 4654' fullWidth size='small'
                        InputProps={{
                            endAdornment : ( < Check fontSize='small' sx={{color:"myColor.green"}} />)
                        }}
                    />
            </Box>

            <Box className={classes.nameAndTelp} > 
                <Box sx={{width:"100%"}}>         
                    <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Expiration Date </InputLabel>
                    < TextField
                        fullWidth
                        placeholder='MM/YY'
                        size='small'   
                        type="date"  
                    />
                </Box>
                <Box sx={{width:"100%"}}>
                    <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> CVC </InputLabel>
                    < TextField
                        fullWidth
                        placeholder='Your name'
                        size='small'     
                    />
                </Box>
             </Box>
                
                <Box >     
                    <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Your Detail Address </InputLabel>
                    < TextField placeholder='17 Acb Street' fullWidth size='small'
                        multiline
                        rows={4}    
                    />
                </Box>            
          
                <Box>
                <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Note for us </InputLabel>
                < TextField
                    multiline
                    rows={3}
                    fullWidth
                    placeholder='More spicy, more sauce, ...'
                />
                
               < FormControlLabel
                    value={'right'}
                    control={< Checkbox color="secondary" {...label} />}
                    label={<Typography sx={{color :"neutrals.grey",fontFamily :"Poppins",fontSize:".76rem"}}
                    > Save card </Typography>}
                    labelPlacement="end"
                    sx={{width :"max-content",marginLeft:".2rem"}}
                />  
            
            </Box>
                
                    <Button variant='contained' color="secondary" type="submit" sx={{alignSelf:"flex-start"}}>ORDER NOW  </Button>
        </form>
    </>
  )
}

export default FormPayment