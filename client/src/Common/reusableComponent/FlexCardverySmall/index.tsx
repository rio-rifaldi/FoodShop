import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import cherry from 'assets/images/svg/cherry.svg';
import { useRef } from 'react';
import useStyles from './Style';
import useOnPoint from './Utils/Hooks/useOnPoint';


type Props = {
    small ?: boolean,
    publishedAt : string | null
    title : string,
    content : string | null,
    urlToImage : string | null,
    url : string
}


function FlexCardVerySmall(props:Props) {
    const {classes} = useStyles();  
    const cardPoint = useRef<HTMLDivElement>(null)

    const {setIsPoint} = useOnPoint(cardPoint)
    let small = props.small


    
        const cardProps ={
            disableRipple : true,
            disableTouchRipple:true,
            onMouseUp: () => setIsPoint(current => !current),
            onMouseDown: () => setIsPoint(current => !current),
            className :classes.cardActionArea,
        }
        const minimizeContent = (content:string | null,size:number) =>{
            if(!content) return
            if(content?.length >  size){
                const trivia = `${content.slice(1,size)} ...`
                return trivia
            }else{
                return content
            }
        } 
        const getCurrentTime = (time:string | null) => {
            if(!time) return
            const date = new Date(time);
            
            return date.toLocaleString()
        }

  return (
    
            <Card className={classes.card} ref={cardPoint}  > 
                <CardActionArea {...cardProps} href={props.url} target="_blank"> 
                    < CardMedia 
                        component='img'
                        src={props.urlToImage ? props.urlToImage : cherry}
                        className={classes.cardMedia}
                        sx={small ? {width :"4rem !important", transform:"translateY(.5rem) !important"} : undefined}
                 
                    />
                    <CardContent sx={{maxWidth :"26rem"}} > 
                    <Typography component={'li'} className={classes.typographyDate}> {getCurrentTime(props.publishedAt)} </Typography>
                        <Typography component={'h1'} className={classes.typographyHead} > 
                        {minimizeContent(props.content,50)}
                        </Typography>
                        {
                            !small &&(
                        <Typography className={classes.typographyPara} > 
                          {minimizeContent(props.content,30)}
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