import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import FlexCardSmall from 'Common/reusableComponent/FlexCardSmall';
import FlexCardVerySmall from 'Common/reusableComponent/FlexCardverySmall';
import useStyles from './Style';

function AllBlogPost() {
    const {classes} = useStyles();
    const theme = useTheme();
    const matchMd = useMediaQuery(theme.breakpoints.up('md'))
    const matchSm = useMediaQuery(theme.breakpoints.up('smBlog'))
    const matchSmDown = useMediaQuery(theme.breakpoints.down('smBlog'))
  return (
    <Box > 
        <Typography component={'h1'} className={classes.head}> All Blog Post </Typography>
        <Box className={classes.cardContainer} > 
            {
                !matchSm ?(
                    <>
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
                        < FlexCardVerySmall />
                    </>
                ):(
                    <>
                    {
                        matchMd ?(
                            <>
                            <Box > 
                                 < FlexCardSmall />
                                < FlexCardSmall />
                                < FlexCardSmall />
                                < FlexCardSmall />

                             </Box>
                            <Box > 
                                < FlexCardVerySmall />
                                < FlexCardVerySmall />
                                < FlexCardVerySmall />
                                < FlexCardVerySmall />
                             </Box>
                            </>
                        ):(
                            <>
                                < FlexCardSmall />
                                < FlexCardSmall />
                                < FlexCardSmall />
                                < FlexCardSmall />

                            </>
                        )
                    }
                    </>
                )
            }
            
         </Box>
     </Box>
    )
}

export default AllBlogPost