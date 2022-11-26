import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import logo from 'assets/images/svg/Logo.svg'
import { SyntheticEvent, useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import Dekstop from './Components/Dekstop'
import Mobile from './Components/Mobile'
import useStyles from './Style'



function Footer() {
    const {classes,theme} = useStyles();
    const match = useMediaQuery(theme.breakpoints.up(480))

  return (
    <>
    < Divider />
    <Box className={classes.mainContainer}> 
            <Box className={classes.textBox}> 
                <img src={logo} alt="logo" className={classes.logo} />    
                <Typography className={classes.textUnderLogo} > 
                    Explore your Taste with speacial food in the special place, that will make you happy. I try to write some thing without lorem isum.
                 </Typography>
             </Box>

            {
                match ? (
                    <Dekstop/>
                ):(

                   < Mobile /> 
                )
            }

     </Box>
    </>
  )
}

export default Footer