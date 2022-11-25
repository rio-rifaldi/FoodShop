import { Search } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import useStyles from './Style';



function Head() {
    const {classes} = useStyles();
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.up('smBlog'))
  return (
    <Box className={classes.mainContainer} mt={10}> 
        <Box sx={{maxWidth : "40rem",margin : "0 auto 1.3rem auto",textAlign: "center"}}  >
        <Typography component='h1' className={classes.title}>Our 
            <Typography component='span' className={classes.titleMark}>  blogs</Typography> 
            </Typography>

        <Typography className={classes.subTitle} >Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. </Typography>
        </Box>
        
        <form action="" className={classes.searchForm}>
            < TextField 
                className={classes.inputSearch}
                placeholder="Search by tag, tittle, ...."
                fullWidth
                InputProps={{
                    startAdornment : (<InputAdornment position='start' > < Search sx={{color:"neutrals.grey"}} /> </InputAdornment>),
                    endAdornment :(
                        <InputAdornment position='end' > <Button variant='contained' color='secondary' size={matchSm ? "medium" : "small"} sx={{textTransform:"capitalize"}}> Search  </Button> </InputAdornment>
                    )
                }}
            />
        </form>
     </Box>
  )
}

export default Head