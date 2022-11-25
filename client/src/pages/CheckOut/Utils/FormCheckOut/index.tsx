import { LocationOnOutlined } from '@mui/icons-material'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'
import FormWithtelp from 'Common/reusableComponent/FormWithTelp'
import useStyles from './Style'



function FormCheckOut() {
    const {classes} = useStyles()
  return (
    <>
        <Typography component={'h1'} className={classes.title}> Comfirm and Pay </Typography>    
        <Typography className={classes.paragraf} >Horayy! This is last steps before enjoying your meal.</Typography>

        <form action="" className={classes.form}>
            <Box className={classes.nameAndTelp} > 
                <Box sx={{width:"100%"}}>         
                    <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Name </InputLabel>
                    < TextField
                        fullWidth
                        placeholder='Your name'
                        size='small'
                        
                    />
                </Box>
                    <Box sx={{width:"100%"}}>
                
                            < FormWithtelp menuTelp={["+32","+73","+79"]} inputLabelProps={{sx:{fontSize:"1.1rem"}}}/>  
                    </Box>
                </Box>


                        <Box >     
                        <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Your Address </InputLabel>
                        < TextField placeholder='17 Acb Street' fullWidth size='small'
                            InputProps={{
                                endAdornment : ( < LocationOnOutlined fontSize='small' sx={{color:"neutrals.grey"}}/>)
                            }}
                        />
                        </Box>
                        
                    <Box>
                    <InputLabel shrink sx={{fontSize:"1.1rem",margin:0}}> Message </InputLabel>
                    < TextField
                        multiline
                        rows={3}
                        fullWidth
                        placeholder='Tell us your problem'
                    />
                
                </Box>
                <Link to={'/payment'}  tabIndex={-1} style={{textDecoration:"unset"}}> 
                      <Button variant='contained' color="secondary" sx={{alignSelf:"flex-start"}}>ORDER NOW  </Button>
                  </Link>
        </form>
    </>
  )
}

export default FormCheckOut