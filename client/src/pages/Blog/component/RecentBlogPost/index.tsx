import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FlexCardSmall from 'Common/reusableComponent/FlexCardSmall';
import salad from 'assets/images/svg/foodSalad.svg';
import useStyles from './Style';

function RecentBlogPost() {
    const {classes} = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'))
    const [isClicked, setIsClicked] = useState(false)
    const cardPoint = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if(isClicked){
        if(cardPoint.current){
            cardPoint.current.style.transform = "scale(.98)"
            cardPoint.current.style.transition = "transform .3s ease-in-out"
        }
        }else{
            if(cardPoint.current){        
                cardPoint.current.style.transform = "scale(1)"
                cardPoint.current.style.transition = "transform .3s ease-in-out"
            }
        }   
    }, [isClicked])
    
  



  return (
    <Box  > 
        <Stack className={classes.stackHeader} > 
            <Typography component={'h1'} sx={{color :"neutrals.darkBlue",fontSize :"1.3rem",fontWeight :500}} > Recent Blog Post </Typography>        
            <Link to={'#/'} className={classes.viewAll}> View All</Link>
         </Stack>
        <Box sx={{display :{md:"flex"},justifyContent:{md:"space-evenly"},width:"100%"}}> 
            <Card className={classes.card} ref={cardPoint}> 
                <CardActionArea className={classes.cardActions} disableRipple disableTouchRipple onMouseUp={ () => setIsClicked(current => !current)} onMouseDown={ () => setIsClicked(current => !current)}  > 
                    < CardMedia 
                        component='img'
                        src={salad}
                        className={classes.cardMedia}
                    />
                    <Typography component={'li'} className={classes.typographyDate}> Jun 20, 2022 </Typography>
                    <CardContent sx={{maxWidth :"26rem"}} > 
                            <Typography component={'h1'} className={classes.typographyHead} > 
                                Healthy Food Choices for Your Family
                             </Typography>
                            <Typography className={classes.typographyPara} > 
                                How can you ensure that your child is well nourished? Here are some tips to keep in mind when planning and preparing meals for your family.
                             </Typography>
                     </CardContent>
                 </CardActionArea>
                 <CardActions className={classes.cardActions} > 
                    < Chip variant='filled' label='Food'  size="small" className={classes.green} /> 
                    < Chip variant='filled' label='Healthy' size="small" className={classes.red} /> 
                    < Chip variant='filled' label='Family'  size="small" className={classes.blue}/> 
                 </CardActions >
             </Card>
            {
                matchesMd && (
                    <Box > 
                        < FlexCardSmall />
                        < FlexCardSmall />                       
                     </Box>

)
}
         </Box>
     </Box>
  )
}

export default RecentBlogPost