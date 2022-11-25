import { Edit, Report } from '@mui/icons-material'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React  from 'react'

type Props = {}

const AboutTab = (props: Props) => {
    return (
        <Box sx={{maxWidth:"47rem",margin:"0 auto"}}> 
        <Box sx={{display:"flex",justifyContent:"space-between",margin:".2rem 0"}}> 
            <Typography sx={{fontFamily:"Alice",fontWeight:600}} > Name </Typography>    
            <Typography sx={{fontFamily:"Alice",fontWeight:500,fontSize:".9rem",color:"neutrals.grey"}} > Rio rifaldi </Typography>
            </Box>
            < Divider />
        <Box sx={{display:"flex",justifyContent:"space-between",margin:".9rem 0"}}> 
            <Typography sx={{fontFamily:"Alice",fontWeight:600}} > Username </Typography>    
            <Typography sx={{fontFamily:"Alice",fontWeight:500,fontSize:".9rem",color:"neutrals.grey"}} > riorifaldi_46 </Typography>
            </Box>
            < Divider />
        <Box sx={{display:"flex",justifyContent:"space-between",margin:".9rem 0"}}> 
            <Typography sx={{fontFamily:"Alice",fontWeight:600}} > Email </Typography>    
            <Typography sx={{fontFamily:"Alice",fontWeight:500,fontSize:".9rem",color:"neutrals.grey"}} > riorifaldi2004@gmail.com </Typography>
            </Box>
            < Divider />
        <Box sx={{display:"flex",justifyContent:"space-between",margin:".9rem 0"}}> 
            <Typography sx={{fontFamily:"Alice",fontWeight:600}} > Phone number </Typography>    
            <Typography sx={{fontFamily:"Alice",fontWeight:500,fontSize:".9rem",color:"neutrals.grey"}} > +62 895 - 7783 - 3290 </Typography>
            </Box>
            < Divider />
        <Box sx={{display:"flex",justifyContent:"space-between",margin:".9rem 0"}}> 
            <Typography sx={{fontFamily:"Alice",fontWeight:600}} > Birth Day </Typography>    
            <Typography sx={{fontFamily:"Alice",fontWeight:500,fontSize:".9rem",color:"neutrals.grey"}} > 13 June 2004 </Typography>
            </Box>
            < Divider />
        <Box sx={{margin:".9rem 0"}}> 
            <Typography sx={{fontFamily:"Alice",fontWeight:600}} > Address </Typography>    
            <Typography sx={{fontFamily:"Alice",fontWeight:500,fontSize:".84rem",color:"neutrals.grey",marginTop:".6rem"}} >kiringan jalan warga utama selatan klampok rt 4 rw 3 banjarnegara</Typography>
            </Box>
            < Divider />

        <Stack direction={'row'} gap='1rem' mt={3} justifyContent='flex-end'> 
                <Button variant='text' size='small' startIcon={<Edit/>} > Update  </Button>
                <Button  size='small' startIcon={<Report/>} color='error' > Delete Account  </Button>
            </Stack>
        </Box>  
    )
}

export default AboutTab