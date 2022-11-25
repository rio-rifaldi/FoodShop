import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography, useTheme } from '@mui/material'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import cherry from 'assets/images/svg/cherry.svg'
import ChipStyle from 'pages/Blog/Utils/ChipStyle';

const useStyles = makeStyles() ((theme) =>{

    return{
        stackHeader :{
            flexDirection :"row",
            justifyContent :"space-between",
            margin : '1.3rem'
        },
        viewAll:{
            textDecoration :"none",
            color :theme.palette.myColor.green,
            fontSize :"1rem",
            [theme.breakpoints.up('sm')]:{
                display :'none'
            }
        },
        card :{
            fontFamily :"Poppins",
            margin : "0 1.3rem",
            maxWidth :"27rem",
            boxShadow :"none",

            "& .MuiCardActionArea-root":{
                ":hover > img":{
                    transform :"scale(1.08)",
                },
                "& > img":{
                    transition :"transform .5s ease-in-out",
                    transform: "translateZ(0)",
                    willChange: "transform",
                    WebkitBackfaceVisibility: "hidden",
                    imageRendering :"pixelated"
                },
                 "&.Mui-focusVisible > img":{
                    transform :"scale(1.08)",
                 },
                 "& > span":{
                    display :"none"
                 },
                 "&":{
                    transform: "translateZ(0)",
                    willChange: "transform",
                    WebkitBackfaceVisibility: "hidden",
                    WebkitFontSmoothing :"subpixel-antialiased",
                    // transition :"transform .5s ease-in-out"
                 }
              }


        },
        cardMedia :{
            width:"7rem"
        },
        typographyDate :{                                                   
            listStyle :"circle",
            fontSize :".74rem",
            color :theme.palette.neutrals.grey,
            [theme.breakpoints.down('mobile')]:{
                display:"none"
            }
        },
        typographyHead :{
            fontSize :"1rem",
            color : theme.palette.neutrals.darkBlue,
            fontWeight : 500
        },
        typographyPara :{
            color :theme.palette.neutrals.grey,
            fontSize:".85rem",
            marginTop :".3rem ",
        },
        cardActions :{
            "&":{
                marginTop:"-0.6rem  ",
                display :"flex",
                justifyContent :"flex-end",
            },
            [theme.breakpoints.down('mobile')]:{
                "& .MuiChip-root":{
                    fontSize :".7rem",
                    transform :"translateX(1rem)"
                }
            }
        },
        ...ChipStyle,
        cardActionArea :{
            display :"flex",
            alignItems :"center",
        }
    }
})
type Props = {
    small ?: boolean 
}

function FlexCardVerySmall(props:Props) {
    const {classes} = useStyles();  
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const cardPoint = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    let small = props.small

    useLayoutEffect(() => {
      if(isClicked){
        if (cardPoint.current){
            cardPoint.current.style.transform = "scale(.98) "
            cardPoint.current.style.transition = "transform .3s ease-in-out"
        }
        }else{
          if (cardPoint.current){
                cardPoint.current.style.transform = "scale(1) "
                cardPoint.current.style.transition = "transform .3s ease-in-out"
          }
        }   
    }, [isClicked])
    
        const cardProps ={
            disableRipple : true,
            disableTouchRipple:true,
            onMouseUp: () => setIsClicked(current => !current),
            onMouseDown: () => setIsClicked(current => !current),
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