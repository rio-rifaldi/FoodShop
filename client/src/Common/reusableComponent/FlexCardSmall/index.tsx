import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography, useTheme } from '@mui/material';
import cherry from 'assets/images/svg/cherry.svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Style';
import useOnClicked from './Utils/Hooks/useOnClicked';



function FlexCardSmall() {
    const {classes} = useStyles();
    const cardPoint = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    const {setIsClicked} = useOnClicked(cardPoint)



    const cardProps ={
        disableRipple : true,
        disableTouchRipple:true,
        onMouseUp: () => setIsClicked(current => !current),
        onMouseDown: () => setIsClicked(current => !current),
        className :classes.cardActionArea,
        onClick :() => navigate('detail')
    }

  

  return (
    
            <Card className={classes.card} ref={cardPoint}  > 
                <CardActionArea {...cardProps}> 
                    < CardMedia 
                        component='img'
                        src={cherry}
                        className={classes.cardMedia}
                 
                    />
                    <CardContent sx={{maxWidth :"26rem"}} > 
                    <Typography component={'li'} className={classes.typographyDate}> Jun 20, 2022 </Typography>
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

    )
}

export default FlexCardSmall