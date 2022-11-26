import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../Style'

type Props = {}

const Mobile = (props: Props) => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const {classes} = useStyles()
    const handleChange = (panel:any) => (event :SyntheticEvent,isExpanded:boolean) =>{
        setExpanded(isExpanded ? panel : false)
    } 
  return (
        <Box > 
            <Accordion sx={{boxShadow :"none"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  > 
            <AccordionSummary expandIcon={< ExpandMore />}> 
                    <Typography sx={{width : "33%",flexShrink : 0}}>  Support </Typography>
                </AccordionSummary> 

                <AccordionDetails className={classes.details} > 

                    <Link to='#/' className={classes.link}> Help Centre </Link>
                    <Link to='#/' className={classes.link}> Safety information </Link>
                    <Link to='#/' className={classes.link}> Cancellation options </Link>
                    <Link to='#/' className={classes.link}> Report Complaint </Link>

                </AccordionDetails>
            </Accordion>    

            <Accordion sx={{boxShadow :"none"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  > 
            <AccordionSummary expandIcon={< ExpandMore />}> 
                    <Typography sx={{width : "33%",flexShrink : 0}}>  Community </Typography>
                </AccordionSummary> 

                <AccordionDetails className={classes.details} > 

                    <Link to='#/' className={classes.link}> Customer Review </Link>
                    <Link to='#/' className={classes.link}> Newsletter </Link>

                </AccordionDetails>
            </Accordion>    

            <Accordion sx={{boxShadow :"none"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  > 
            <AccordionSummary expandIcon={< ExpandMore />}> 
                    <Typography sx={{width : "33%",flexShrink : 0}}>  About </Typography>
                </AccordionSummary> 

                <AccordionDetails className={classes.details} > 

                    <Link to='#/' className={classes.link}> Our Chef </Link>
                    <Link to='#/' className={classes.link}> Careers </Link>
                    <Link to='#/' className={classes.link}> Blog </Link>
                    <Link to='#/' className={classes.link}> Contact </Link>

                </AccordionDetails>
            </Accordion>    
        </Box>
  )
}

export default Mobile