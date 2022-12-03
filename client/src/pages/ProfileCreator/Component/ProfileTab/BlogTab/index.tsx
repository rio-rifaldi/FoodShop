import { Box, Typography } from '@mui/material'
import imageBlog from 'assets/images/svg/blog_creating.svg'


const BlogTab = () => {
    return (
        <Box sx={{marginTop:"1.6rem"}} > 
            <Box sx={{maxWidth:{xsMenu:"14rem",sm:"18rem"},margin:"0 auto"}}>  
                <img src={imageBlog} alt="Blog comming Soon" style={{
                  width: '100%'
                }}  />  
            </Box>
             <Typography sx={{
              textAlign :"center",
              marginTop: "1.4rem",
              color : "neutrals.grey",
              fontWeight: "bold",
             }} > 
                  Comming Soon
               </Typography>
        </Box>
    )
  }
      
export default BlogTab