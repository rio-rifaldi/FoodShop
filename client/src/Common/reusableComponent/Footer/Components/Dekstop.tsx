import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../Style'

type Props = {}

const Dekstop = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box className={classes.textWrap}>
    <Box className={classes.containerText} > 
        <Typography > Support </Typography>
        <Link to="#/" className={classes.link}> Help Centre </Link>
        <Link to="#/" className={classes.link}> Safety information </Link>
        <Link to="#/" className={classes.link}> Cancellation options </Link>
        <Link to="#/" className={classes.link}> Report Complaint </Link>

    </Box>
    <Box className={classes.containerText} > 
        <Typography > Community </Typography>
        <Link to="#/" className={classes.link}> Customer Review </Link>
        <Link to="#/" className={classes.link}> Newsletter </Link>
 

    </Box>
    <Box className={classes.containerText} > 
        <Typography > About </Typography>
        <Link to='#/' className={classes.link}> Our Chef </Link>
        <Link to='#/' className={classes.link}> Careers </Link>
        <Link to='#/' className={classes.link}> Blog </Link>
        <Link to='#/' className={classes.link}> Contact </Link>

    </Box>  

</Box>
  )
}

export default Dekstop