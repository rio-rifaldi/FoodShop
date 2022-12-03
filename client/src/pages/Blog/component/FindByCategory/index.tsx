import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import ChipStyle from '../../Utils/ChipStyle'

const useStyles = makeStyles() ((theme) =>{
    return{
        ...ChipStyle,

    }
})
function FindByCategory() {
    const {classes} = useStyles();
  return (
        <Box sx={{padding :"2.5rem 0",margin:".5rem 1rem",borderTop:"1.4px solid #E6E8EC"}} > 
            <Typography sx={{fontFamily :"Alice",textTransform :"capitalize",fontSize:"2.7rem",textAlign:"center"}} > Finding categories through words </Typography>
                <Stack sx={{margin :"2.4rem auto",maxWidth:"40rem"}} flexDirection="row" justifyContent={"center" } gap={'1.5rem'} flexWrap="wrap"> 
              
                    < Chip label='business' className={classes.blue} />  
                    < Chip label='entertainment' className={classes.green} />  
                    < Chip label='general' className={classes.purple} />  
                    < Chip label='health' className={classes.red} />  
                    < Chip label='science' className={classes.pink} />  
                    < Chip label='sports' className={classes.darkCyan} />  
                    < Chip label='technology' className={classes.oldOrage} />  
                 </Stack>
         </Box>
    )
}

export default FindByCategory