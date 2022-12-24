import { Add, ArrowBack } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, Typography } from '@mui/material';
import location from 'assets/images/svg/gummy-location.svg';
import useGetPayment from 'pages/CheckOut/Utils/Hooks/useGetPayment';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddressCard from '../AddressCard.tsx';
import FormPayment from '../FormPayment';
import ProductCheckOut from '../ProductCheckOut';
import useStyles from './Style';

function Checkout() {
    const {classes} = useStyles();
    const [isOpen, setIsOpen] = useState(false)
    const {payment} = useGetPayment()
    const setClose = () => setIsOpen(false)
    const setOpen = () => setIsOpen(true)
    const [value, setValue] = useState('')
    const handleChange = (arg:string) => setValue(arg) 
    let ispaymentExist = payment?.map((method) => method._id === value)
    const navigate = useNavigate()

    if(ispaymentExist?.includes(true)){
      let selectedPayment = payment?.filter((el) => el._id === value)
      localStorage.setItem('userPayment',JSON.stringify(Object(selectedPayment)))
    }

    return (
    <>
          < FormPayment isOpen={isOpen} setClose={setClose} />
      <Box mt={10}> 
          <Link to={'/home'}  tabIndex={0} style={{textDecoration:"unset"}}>  
            <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button> 
          </Link>

          <Typography component={'h1'} className={classes.title}> Comfirm and Pay </Typography>    
          <Typography className={classes.paragraf} >Horayy! This is last steps before enjoying your meal.</Typography>

    <Box my={3} >  
        {
          payment && payment.length <= 0 ?(
            <Button variant='text' disableRipple onClick={setOpen}> 
                <Box sx={{display:'flex',gap:".3rem",justifyContent:"center",alignItems:"center"}}> 
                <img src={location} alt="image location"  style={{width:"4rem"}}/>
                    <Typography > Add < Add sx={{width:"1rem"}}/> </Typography>
                </Box>
            </Button>
          ):(
              <FormControl className={classes.addressBox}  > 
                {
   
                  payment?.map((address,index) =>{
                    return(
                      < AddressCard address={address} value={value} handleChange={handleChange} />
                    )
                  } )
                }
                <IconButton sx={{width:"max-content",justifySelf:"start",height:"max-content"}} onClick={setOpen} > 
                    < Add />  
                 </IconButton>
              </FormControl>
          )
        }

      </Box>

        <Box className={classes.mainContainerCheckOut}> 
            < ProductCheckOut />
            
             <Button color="secondary" variant='contained' disabled={ (ispaymentExist?.includes(true)) ? false : true} sx={{width:"100%"}} onClick={() => navigate('/payment')} > Next </Button>
          
         </Box> 

          
      </Box>
    
    </>
  )
}

export default Checkout