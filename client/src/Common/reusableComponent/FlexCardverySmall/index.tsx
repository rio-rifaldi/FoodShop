import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import cherry from 'assets/images/svg/cherry.svg';
import { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Style';
import useOnPoint from './Utils/Hooks/useOnPoint';


type Props = {
    small ?: boolean 
}

function FlexCardVerySmall(props:Props) {
    const {classes} = useStyles();  
    const cardPoint = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    const {setIsPoint} = useOnPoint(cardPoint)
    let small = props.small


    
        const cardProps ={
            disableRipple : true,
            disableTouchRipple:true,
            onMouseUp: () => setIsPoint(current => !current),
            onMouseDown: () => setIsPoint(current => !current),
            className :classes.cardActionArea,
            onClick :() => navigate('/detail'),
        }

  return (
    
            <Card className={classes.card} ref={cardPoint}  > 
                <CardActionArea {...cardProps} > 
                    < CardMedia 
                        component='img'
                        src={cherry}
                        className={classes.cardMedia}
                        sx={small ? {width :"4rem !important", transform:"translateY(.5rem) !important"} : undefined}
                 
                    />
                    <CardContent sx={{maxWidth :"26rem"}} > 
                    <Typography component={'li'} className={classes.typographyDate}> Jun 20, 2022 </Typography>
                        <Typography component={'h1'} className={classes.typographyHead} > 
                        Healthy Food Choices for Your Family
                        </Typography>
                        {
                            !small &&(
                        <Typography className={classes.typographyPara} > 
                            How can you ensure that your child is well nourished?...
                            </Typography>
                            )
                        }
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

export default FlexCardVerySmall