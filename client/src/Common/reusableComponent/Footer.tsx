import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import logo from 'assets/images/svg/Logo.svg'
import { SyntheticEvent, useState } from 'react'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles() ((theme) =>{
    return {
        logo :{
            textAlign :"center"
        },
        textBox :{
            textAlign :"center",
            margin :"1rem",
            maxWidth :"25rem",
            alignSelf :"center",
            [theme.breakpoints.up('md')]:{
                transform :"scale(.95)"
            }
  
        },
        textUnderLogo :{
            textAlign :"center",
            fontFamily :"Poppins",
            color : theme.palette.neutrals.grey,
            fontSize :".84rem",
            margin :"1rem 0",
            lineHeight : "1.5rem"
        },
        details :{
            display : 'flex',
            flexWrap :"wrap",
            justifyContent :"center",
            alignItems :"center",
            gap :".7rem"
        },
        link :{
            textDecoration : 'none',
            color : theme.palette.neutrals.grey,
            fontFamily :"Poppins",
            fontSize : ".9rem"
        },
        containerText :{
            display :"flex",
            flexDirection :"column",
            gap :"1rem",
            fontFamily :"Poppins",

        },
        mainContainer :{
            display :"flex",
            flexDirection :"column",
            marginBottom : "1rem",
            gap :"1rem",
            [theme.breakpoints.up('md')]:{
                flexDirection :"row",   
                justifyContent : "center",
                transform :"scale(.9)"
            }
        },
        textWrap :{
            margin : "1rem 0",
            display :"flex",
            justifyContent :"space-around",

            flexGrow : 1    
        }
    }
})

function Footer() {
    const {classes} = useStyles();
    const theme = useTheme();
    const matchMediaXs = useMediaQuery(theme.breakpoints.up('xs'))
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel:any) => (event :SyntheticEvent,isExpanded:boolean) =>{
        setExpanded(isExpanded ? panel : false)
    } 
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
                matchMediaXs ? (
                    <Box className={classes.textWrap}>
                            <Box className={classes.containerText} > 
                                <Typography > Support </Typography>
                                <Link href="#/" className={classes.link}> Help Centre </Link>
                                <Link href="#/" className={classes.link}> Safety information </Link>
                                <Link href="#/" className={classes.link}> Cancellation options </Link>
                                <Link href="#/" className={classes.link}> Report Complaint </Link>

                            </Box>
                            <Box className={classes.containerText} > 
                                <Typography > Community </Typography>
                                <Link href="#/" className={classes.link}> Customer Review </Link>
                                <Link href="#/" className={classes.link}> Newsletter </Link>
                         

                            </Box>
                            <Box className={classes.containerText} > 
                                <Typography > About </Typography>
                                <Link href='#/' className={classes.link}> Our Chef </Link>
                                <Link href='#/' className={classes.link}> Careers </Link>
                                <Link href='#/' className={classes.link}> Blog </Link>
                                <Link href='#/' className={classes.link}> Contact </Link>
                
                            </Box>  
                    
                    </Box>
                ):(

                <Box > 
                        <Accordion sx={{boxShadow :"none"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  > 
                        <AccordionSummary expandIcon={< ExpandMore />}> 
                                <Typography sx={{width : "33%",flexShrink : 0}}>  Support </Typography>
                            </AccordionSummary> 

                            <AccordionDetails className={classes.details} > 

                                <Link href='#/' className={classes.link}> Help Centre </Link>
                                <Link href='#/' className={classes.link}> Safety information </Link>
                                <Link href='#/' className={classes.link}> Cancellation options </Link>
                                <Link href='#/' className={classes.link}> Report Complaint </Link>
                
                            </AccordionDetails>
                        </Accordion>    

                        <Accordion sx={{boxShadow :"none"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  > 
                        <AccordionSummary expandIcon={< ExpandMore />}> 
                                <Typography sx={{width : "33%",flexShrink : 0}}>  Community </Typography>
                            </AccordionSummary> 

                            <AccordionDetails className={classes.details} > 

                                <Link href='#/' className={classes.link}> Customer Review </Link>
                                <Link href='#/' className={classes.link}> Newsletter </Link>
                
                            </AccordionDetails>
                        </Accordion>    

                        <Accordion sx={{boxShadow :"none"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  > 
                        <AccordionSummary expandIcon={< ExpandMore />}> 
                                <Typography sx={{width : "33%",flexShrink : 0}}>  About </Typography>
                            </AccordionSummary> 

                            <AccordionDetails className={classes.details} > 

                                <Link href='#/' className={classes.link}> Our Chef </Link>
                                <Link href='#/' className={classes.link}> Careers </Link>
                                <Link href='#/' className={classes.link}> Blog </Link>
                                <Link href='#/' className={classes.link}> Contact </Link>
                
                            </AccordionDetails>
                        </Accordion>    
                </Box>
                )
            }

     </Box>
    </>
  )
}

export default Footer