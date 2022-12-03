import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import cherry from 'assets/images/svg/cherry.svg';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Style';
import useOnClicked from './Utils/Hooks/useOnClicked';



 interface Props{
    small ?: boolean,
    publishedAt : string | null
    title : string,
    content : string | null,
    urlToImage : string | null,
    url : string
 }
function FlexCardSmall(props : Props) {
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
    }
    const minimizeContent = (content:string | null,size:number) =>{
        if(!content) return
        if(content?.length >  size){
            const trivia = `${content.slice(0,size)} ...`
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
                        src={props.urlToImage ? props.urlToImage : cherry }
                        className={classes.cardMedia}
                        sx={
                            props.small ? {
                                height :"5rem",
                                width :"9rem",
                            }: undefined
                        }
                 
                    />
                    <CardContent sx={{maxWidth :"26rem"}} > 
                    <Typography component={'li'} className={classes.typographyDate}> {getCurrentTime(props.publishedAt)}</Typography>
                            <Typography component={'h1'} className={classes.typographyHead} > 
                               {
                                props.small ? minimizeContent(props.title,40):minimizeContent(props.title,100)
                               }
                             </Typography>
                            <Typography className={classes.typographyPara} > 
                                {   props.small ? minimizeContent(props.content,40):minimizeContent(props.content,100)
                                }
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