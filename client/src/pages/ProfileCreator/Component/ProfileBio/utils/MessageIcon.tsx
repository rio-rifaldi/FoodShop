import { Email } from '@mui/icons-material'
import { Badge, Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'

type Props = {}

const MessageIcon = (props: Props) => {
  const theme = useTheme();
  const match = useMediaQuery("(min-width:400px")
  return (
    <Box >
         <IconButton  >
            <Badge badgeContent={6} sx={{
               "& .MuiBadge-badge":{
                border : `2px solid ${theme.palette.background.paper}`,
                padding:"0 4px",
                backgroundColor : theme.palette.myColor.green,
                fontWeight:"bolder",
                color:"white"
              }
            }} > 
                  < Email  />
            </Badge> 
        </IconButton>{
          match &&(
            <Typography sx={{display:"inline",verticalAlign:"middle",marginLeft:".3rem",fontSize:".9rem",fontWeight:"400"}} > Message  </Typography >

          )
        }
    </Box>
  ) 
}

export default MessageIcon