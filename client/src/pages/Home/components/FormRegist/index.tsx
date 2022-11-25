import { LocationOnOutlined } from '@mui/icons-material'
import { Box, Button, InputLabel, Link, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import beef from 'assets/images/svg/Bibimbap.svg'
import chiken from 'assets/images/svg/chiken.svg'
import dana from "assets/images/svg/DANA.svg"
import gopay from "assets/images/svg/GoPay.svg"
import kurir from "assets/images/svg/kurir.svg"
import master from "assets/images/svg/master.svg"
import shoope from "assets/images/svg/ShopeePay.svg"
import pork from 'assets/images/svg/Tokpokki.svg'
import visa from "assets/images/svg/Visa.svg"
import DropDown from "Common/reusableComponent/DropDown"
import FormWithtelp from 'Common/reusableComponent/FormWithTelp'
import useStyles from './Style'

function FormRegist() {
  const {classes} = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  
  return (
    <Box sx={{margin : "6rem 0"}} > 
      <Typography component={"h1"} className={classes.TypographyTitle}> 
         Get the best Taste  <Typography component={"mark"} className={classes.TypographyTitleMark}> Now! </Typography> 
        </Typography>  
      <Typography className={classes.TypographyTitlePara}> Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. </Typography>

      <Stack className={classes.stackImageAndForm} mt={4} > 
          <Box sx={{margin :"1rem 1.3rem",width :{sm :"28rem"}}} > 
            <Typography sx={{fontSize :"1.1rem",color :"#353945",fontFamily:"Poppins"}} > What’s your Taste? </Typography>
            <Typography sx={{fontSize :".86rem",color :"#353945",fontFamily:"Poppins",marginBottom :"1.5rem"}} > Fill out the form and let us know your taste. </Typography>

                <form action="" autoComplete='off'>
                  <Box >  
                    <Stack direction={"row"} justifyContent={'space-between'} alignItems={'center'} >
                      <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}} htmlFor='select-meal'> Select your Meal </InputLabel>
                      <Link href='/#/' underline='none' sx={{color : "myColor.green",fontFamily :"Poppins",fontSize:".8rem"}} > View menu </Link>
                      </Stack>
                     < DropDown placeholder={"What is your taste ?"} icon={[chiken,pork,beef]} 
                        menuList={['chiken',"pork","beef"]}
                        formGroupProps={{fullWidth:true}}
                    />
                  </Box>
                  <Stack className={classes.stackNameAndPhone} > 
                      <Box > 
                        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}} htmlFor='order-name'> Order name</InputLabel>
                        < TextField placeholder='Your name' id='order-name' size='small' variant='outlined' fullWidth />
                      </Box> 
                      < > 
                          < FormWithtelp menuTelp={['+62','+98','+53','+83']}    />
                      </  >
                  </Stack>

                  <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}} htmlFor='address'> Address </InputLabel>
                    < TextField
                    placeholder='Jl. Achmad Yani no 28' 
                      id='address'
                      InputProps={{
                      endAdornment : < LocationOnOutlined fontSize='small' sx={{color:"neutrals.grey"}} /> 
                      }}
                      size='small'
                      fullWidth
                      
                    />

                      <Box my={2}> 
                      < DropDown placeholder={"Credit card"} icon={[visa,master,shoope,gopay,dana]} 
                        labelValue={'Payment Method'}
                        menuList={['visa',"master","ShopeePay","GoPay","DANA"]}
                        formGroupProps={{fullWidth:true}}
                    />
                  </Box>

                  <InputLabel shrink sx={{fontSize:"1.1rem", }} htmlFor='NoteForUs'> Note for us </InputLabel>
                  < TextField  
                    id='NoteForUs'
                    multiline
                    rows={3}
                    size='small'
                    fullWidth
                    placeholder='More spicy, more sauce, ...'
                  />
                  <Typography sx={{color : "neutrals.grey",fontFamily:"Poppins",fontSize:".87rem",margin :".7rem 0 "}} >
                    you will pay <Typography sx={{color : "myColor.green",fontFamily:"Alice",backgroundColor:"transparent",fontSize:"1.3rem",margin:"0 .5rem"}} component={'mark'} >  $0.00  </Typography>
                  </Typography>
                      
                  <Button variant='contained' color='secondary' sx={{textTransform:"capitalize",fontFamily:"Poppins"}} type='submit' fullWidth={!matches ? true : false}> Order Now </Button>
                </form>
      

          
          </Box>
        {
          matches && (
            <img src={kurir} alt="gambar kurir" className={classes.imageKurir}/>
          )
        }
      </Stack>
     </Box>
  )
}

export default FormRegist