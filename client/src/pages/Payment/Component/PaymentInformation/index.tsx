import { Box, Typography, useMediaQuery } from '@mui/material'
import kurir from "assets/images/svg/kurir.svg"
import { getPaymentIcon } from 'pages/Payment/Utils/Functions'
import Letter from 'pages/Payment/Utils/Functions/Letter'
import useFetchUser from 'pages/ProfileCreator/Utils/Hooks/useFetchUser'
import useStyles from './Style'



type address = {
    _id : string,
    __typename: string
    detailAddress : string,
    paymentMethod: string
}


const PaymentInformation = () => {
    const {data,loading} = useFetchUser()
    const user = data?.getUser
    const address:address = JSON.parse(localStorage.getItem('userPayment') as string)[0]
    const {classes,theme} = useStyles()
    const matchTablet = useMediaQuery(theme.breakpoints.up(600))
  return (
    <>
            <Box my={2} mx={1} > 
             <Box className={classes.boxMainAddress}> 
                <Box className={classes.boxAddress}> 
                    <Typography  className={classes.name}> {`${user?.firstName} ${user?.lastName}`} </Typography>
                    <Typography > {user?.UserDetail?.numberTelp} </Typography>
                    <Typography className={classes.address} > {address.detailAddress} </Typography>
                    <Typography  className={classes.paymentMethod}> {address.paymentMethod} <img src={getPaymentIcon(address.paymentMethod)} alt={address.paymentMethod} className={classes.paymentIcon} />  </Typography>
                  </Box>
                    {matchTablet && (
                  <img src={kurir} alt="gambar kurir" className={classes.kurir}/>
                    )}

                </Box>
             < Letter length={16}/>
             </Box>

    </>
    
  )
}

export default PaymentInformation