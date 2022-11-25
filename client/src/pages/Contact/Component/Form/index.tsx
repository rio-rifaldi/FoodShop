import { Box, Button, InputLabel, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import FormWithtelp from 'Common/reusableComponent/FormWithTelp'
import map from 'assets/images/svg/Map.svg'
import useStyles from './Style'



function Contacts() {
        const {classes} = useStyles();    
        const theme = useTheme();
        const mathes = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <>
    
            <Box className={classes.mainContainer} mt={10} > 
            <Box className={classes.formWrap}>
              <Box className={classes.textContainer} > 
                  <Typography component={'h1'} className={classes.title}> Contact us </Typography>    
                  <Typography className={classes.paragraf} > We love to here you anytime. You can reach us anytime via 
                  <Typography  component={'mark'} className={classes.mark}> Mailhere@Food.com  </Typography >
                      </Typography>
              </Box>
            
              <form action="" className={classes.form}>
                <Box className={classes.nameAndEmail} > 
                    <Box sx={{width:"100%"}}>         
                        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Name </InputLabel>
                        < TextField
                            fullWidth
                            placeholder='Your name'
                            size='small'
                            
                        />
                    </Box>
                    <Box sx={{width:"100%"}}>
                        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Email </InputLabel>
                        < TextField placeholder='Example@example.com' fullWidth size='small'/>
                    </Box>
                   </Box>
                          < FormWithtelp menuTelp={["+32","+73","+79"]} inputLabelProps={{sx:{fontSize:"1.1rem"}}}/>  
                      <Box>
                        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Message </InputLabel>
                        < TextField
                          multiline
                          rows={3}
                          fullWidth
                          placeholder='Tell us your problem'
                        />
                    
                    </Box>
                    
                      <Button variant='contained' color="secondary" type="submit" sx={{alignSelf:"flex-start"}}>ORDER NOW  </Button>
                </form>
            </Box>
              {
                mathes &&(
                  <img src={map} alt="map" className={classes.image} />
                )
              }
            </Box>
    </>
  )
}

export default Contacts