import { Fastfood, MenuBook } from '@mui/icons-material'
import { Box, Button, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import bg from 'assets/images/svg/bG.svg'
import food from 'assets/images/svg/Bibimbap.svg'
import sumpit from 'assets/images/svg/Chopstick.svg'
import sugar from 'assets/images/svg/Sugar.svg'
import useStyles from './Style'




function Head() {

  const theme = useTheme();
  const {classes} = useStyles()
  const mathes = useMediaQuery(theme.breakpoints.up("sm"))


return (
    <Box className={classes.container} mt={10}>
           
            <Box className={classes.textBox}> 
            <Typography component='h1'className={classes.typographyHeader} > You've Got Questions. We've Got Taste. </Typography>
                
            <Typography className={classes.typographyPara} >Explore your Taste with speacial food in the special place. This text don’t have any meaning </Typography>

            <Stack direction={'row'} gap={2} className={classes.buttonStack}>
              
            <Link to={'/checkOut'}  tabIndex={-1} style={{textDecoration:"unset"}}>  
             <Button color='secondary' variant='contained' sx={{borderRadius :".5rem"}} startIcon={< Fastfood />}> order now</Button>
            </Link>
            {
              mathes && (
                <Link to={'/menu'}  tabIndex={-1} style={{textDecoration:"unset"}}> 
                <Button color="secondary" variant="text" sx={{borderRadius :".5rem"}} startIcon={< MenuBook color="secondary" />} > Menu List</Button>
                 </Link>
              )
            }
            </Stack>
                {
                  mathes &&(
                    <Stack direction='row' className={classes.rateStack} justifyContent="center" spacing={5} mt={3}> 
                        <Box>
                          <Typography className={classes.typographyRateHead}> 9+ </Typography>
                          <Typography className={classes.typographyRatePara}>  years of service. </Typography>
                        </Box>
                        < Divider orientation='vertical' flexItem />
                        <Box>
                          <Typography className={classes.typographyRateHead} > 120+ </Typography>
                          <Typography className={classes.typographyRatePara}> Store in the world. </Typography>
                        </Box>
                  </Stack>
                  )
                }     

            </Box>
                
            <Box className={classes.boxImage} > 
            
                  <Box className={classes.BoxImageFood} >        
                      <img src={food} alt="food" className={classes.foodImage} />
                      <Box className={classes.boxImageFoodNested}> 
                          <img src={sugar} alt="sugar" className={classes.sugarImage} />
                          <img src={sumpit} alt="sumpit" className={classes.sumpitImage}/>
                      </Box>
                  </Box>
                    <img src={bg} alt='background' className={classes.bgImage}/>
            
                  </Box> 



    </Box>
  )
}

export default Head