import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import greenFire from "assets/images/svg/ant-design_fire-filled.svg"
import Toboki from "assets/images/svg/Tokpokki.svg"
import Slider from 'react-slick'
import useStyles from './Style'

type Props = {}



const Cards = (props: Props) => {
  const {classes} = useStyles();

  let settings = {
    className : classes.stackCard,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight:false,
    variableWidth:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box my={5}>
        <Box sx={{maxWidth : "40rem",margin : "0 auto",textAlign: "center"}}  >
            <Typography component='h1' className={classes.title}>Today <Typography component='span' className={classes.titleMark}> special</Typography>  offers
             </Typography>

            <Typography className={classes.subTitle} >Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.  </Typography>
        </Box>

        <Slider {...settings}  > 

            <Card  sx={{minWidth : "22rem",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",p : 2,borderRadius : ".6rem" , transform:'scale(.8)'}}>  
            <CardMedia
              component='img'
              image={Toboki}
              alt='topoki image'
              sx={{width : "12rem",margin : "0 auto" ,p :2}}     
            />
            <CardContent > 
              <Stack direction='row' justifyContent={"space-between"} alignItems={'center'}> 
                <Typography component={'h1'} sx={{fontFamily : "Alice",color : "#23262F",fontSize :"1.56rem"}} >Korea BBQ</Typography> 
                <Typography sx={{color : "myColor.green", fontWeight : "600", border : "1.7px solid #04B90B",width : "max-content",paddingRight : "6px",borderRadius : ".3rem",
                  "&::before" :{
                    content : `url(${greenFire})`,
                    display : "inline-block",
                    margin : "0 3px",
                    transform : "translateY(4px)",
                  },fontSize : "1rem",fontFamily : "Poppins"
                }} > 02:21:11 </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center" mb={"4.8px"} mt={"1px"} ml={"-1px"}> 
              < Rating 
                name='rating-food'
                value={5}
                readOnly
                sx={{color : "myColor.green",fontSize:"1.3rem"}}
              />
              <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:".81rem"}}>214 Reviews</Typography>
              </Stack>

              <Typography sx={{fontFamily:"Poppins",fontSize : ".93rem",color : "#353945"}}>Excellent flavor for your preference with :</Typography>
              <ul style={{fontFamily:"Poppins",fontSize: ".89rem",margin : "2px 0 0 -13px",color : "#353945",lineHeight :"1.3rem"}}>
                  <li>Aromatic</li>
                  <li>Spicy</li>
                  <li>Honeyed sugary</li>
              </ul>
              
                
            </CardContent>

            <CardActions sx={{display : "flex",justifyContent :"space-between",alignItems : "center",margin : "0 1rem" }}>  
              <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"2.2rem"}}>$21.99</Typography>
              <Button variant='contained' color="secondary" sx={{textTransform:"capitalize"}}>Order now</Button>
            </CardActions>
          </Card>
            <Card  sx={{minWidth : "22rem",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",p : 2,borderRadius : ".6rem" , transform:'scale(.82)'}}>  
            <CardMedia
              component='img'
              image={Toboki}
              alt='topoki image'
              sx={{width : "12rem",margin : "0 auto" ,p :2}}     
            />
            <CardContent > 
              <Stack direction='row' justifyContent={"space-between"} alignItems={'center'}> 
                <Typography component={'h1'} sx={{fontFamily : "Alice",color : "#23262F",fontSize :"1.56rem"}} >Korea BBQ</Typography> 
                <Typography sx={{color : "myColor.green", fontWeight : "600", border : "1.7px solid #04B90B",width : "max-content",paddingRight : "6px",borderRadius : ".3rem",
                  "&::before" :{
                    content : `url(${greenFire})`,
                    display : "inline-block",
                    margin : "0 3px",
                    transform : "translateY(4px)",
                  },fontSize : "1rem",fontFamily : "Poppins"
                }} > 02:21:11 </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center" mb={"4.8px"} mt={"1px"} ml={"-1px"}> 
              < Rating 
                name='rating-food'
                value={5}
                readOnly
                sx={{color : "myColor.green",fontSize:"1.3rem"}}
              />
              <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:".81rem"}}>214 Reviews</Typography>
              </Stack>

              <Typography sx={{fontFamily:"Poppins",fontSize : ".93rem",color : "#353945"}}>Excellent flavor for your preference with :</Typography>
              <ul style={{fontFamily:"Poppins",fontSize: ".89rem",margin : "2px 0 0 -13px",color : "#353945",lineHeight :"1.3rem"}}>
                  <li>Aromatic</li>
                  <li>Spicy</li>
                  <li>Honeyed sugary</li>
              </ul>
              
                
            </CardContent>

            <CardActions sx={{display : "flex",justifyContent :"space-between",alignItems : "center",margin : "0 1rem" }}>  
              <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"2.2rem"}}>$21.99</Typography>
              <Button variant='contained' color="secondary" sx={{textTransform:"capitalize"}}>Order now</Button>
            </CardActions>
          </Card>
            <Card  sx={{minWidth : "22rem",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",p : 2,borderRadius : ".6rem" , transform:'scale(.82)'}}>  
            <CardMedia
              component='img'
              image={Toboki}
              alt='topoki image'
              sx={{width : "12rem",margin : "0 auto" ,p :2}}     
            />
            <CardContent > 
              <Stack direction='row' justifyContent={"space-between"} alignItems={'center'}> 
                <Typography component={'h1'} sx={{fontFamily : "Alice",color : "#23262F",fontSize :"1.56rem"}} >Korea BBQ</Typography> 
                <Typography sx={{color : "myColor.green", fontWeight : "600", border : "1.7px solid #04B90B",width : "max-content",paddingRight : "6px",borderRadius : ".3rem",
                  "&::before" :{
                    content : `url(${greenFire})`,
                    display : "inline-block",
                    margin : "0 3px",
                    transform : "translateY(4px)",
                  },fontSize : "1rem",fontFamily : "Poppins"
                }} > 02:21:11 </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center" mb={"4.8px"} mt={"1px"} ml={"-1px"}> 
              < Rating 
                name='rating-food'
                value={5}
                readOnly
                sx={{color : "myColor.green",fontSize:"1.3rem"}}
              />
              <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:".81rem"}}>214 Reviews</Typography>
              </Stack>

              <Typography sx={{fontFamily:"Poppins",fontSize : ".93rem",color : "#353945"}}>Excellent flavor for your preference with :</Typography>
              <ul style={{fontFamily:"Poppins",fontSize: ".89rem",margin : "2px 0 0 -13px",color : "#353945",lineHeight :"1.3rem"}}>
                  <li>Aromatic</li>
                  <li>Spicy</li>
                  <li>Honeyed sugary</li>
              </ul>
              
                
            </CardContent>

            <CardActions sx={{display : "flex",justifyContent :"space-between",alignItems : "center",margin : "0 1rem" }}>  
              <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"2.2rem"}}>$21.99</Typography>
              <Button variant='contained' color="secondary" sx={{textTransform:"capitalize"}}>Order now</Button>
            </CardActions>
          </Card>
            <Card  sx={{minWidth : "22rem",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",p : 2,borderRadius : ".6rem" , transform:'scale(.82)'}}>  
            <CardMedia
              component='img'
              image={Toboki}
              alt='topoki image'
              sx={{width : "12rem",margin : "0 auto" ,p :2}}     
            />
            <CardContent > 
              <Stack direction='row' justifyContent={"space-between"} alignItems={'center'}> 
                <Typography component={'h1'} sx={{fontFamily : "Alice",color : "#23262F",fontSize :"1.56rem"}} >Korea BBQ</Typography> 
                <Typography sx={{color : "myColor.green", fontWeight : "600", border : "1.7px solid #04B90B",width : "max-content",paddingRight : "6px",borderRadius : ".3rem",
                  "&::before" :{
                    content : `url(${greenFire})`,
                    display : "inline-block",
                    margin : "0 3px",
                    transform : "translateY(4px)",
                  },fontSize : "1rem",fontFamily : "Poppins"
                }} > 02:21:11 </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center" mb={"4.8px"} mt={"1px"} ml={"-1px"}> 
              < Rating 
                name='rating-food'
                value={5}
                readOnly
                sx={{color : "myColor.green",fontSize:"1.3rem"}}
              />
              <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:".81rem"}}>214 Reviews</Typography>
              </Stack>

              <Typography sx={{fontFamily:"Poppins",fontSize : ".93rem",color : "#353945"}}>Excellent flavor for your preference with :</Typography>
              <ul style={{fontFamily:"Poppins",fontSize: ".89rem",margin : "2px 0 0 -13px",color : "#353945",lineHeight :"1.3rem"}}>
                  <li>Aromatic</li>
                  <li>Spicy</li>
                  <li>Honeyed sugary</li>
              </ul>
              
                
            </CardContent>  

            <CardActions sx={{display : "flex",justifyContent :"space-between",alignItems : "center",margin : "0 1rem" }}>  
              <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"2.2rem"}}>$21.99</Typography>
              <Button variant='contained' color="secondary" sx={{textTransform:"capitalize"}}>Order now</Button>
            </CardActions>
          </Card>
            <Card  sx={{minWidth : "22rem",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",p : 2,borderRadius : ".6rem" , transform:'scale(.82)'}}>  
            <CardMedia
              component='img'
              image={Toboki}
              alt='topoki image'
              sx={{width : "12rem",margin : "0 auto" ,p :2}}     
            />
            <CardContent > 
              <Stack direction='row' justifyContent={"space-between"} alignItems={'center'}> 
                <Typography component={'h1'} sx={{fontFamily : "Alice",color : "#23262F",fontSize :"1.56rem"}} >Korea BBQ</Typography> 
                <Typography sx={{color : "myColor.green", fontWeight : "600", border : "1.7px solid #04B90B",width : "max-content",paddingRight : "6px",borderRadius : ".3rem",
                  "&::before" :{
                    content : `url(${greenFire})`,
                    display : "inline-block",
                    margin : "0 3px",
                    transform : "translateY(4px)",
                  },fontSize : "1rem",fontFamily : "Poppins"
                }} > 02:21:11 </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center" mb={"4.8px"} mt={"1px"} ml={"-1px"}> 
              < Rating 
                name='rating-food'
                value={5}
                readOnly
                sx={{color : "myColor.green",fontSize:"1.3rem"}}
              />
              <Typography sx={{fontFamily : "Poppins",color : "#23262F",fontSize:".81rem"}}>214 Reviews</Typography>
              </Stack>

              <Typography sx={{fontFamily:"Poppins",fontSize : ".93rem",color : "#353945"}}>Excellent flavor for your preference with :</Typography>
              <ul style={{fontFamily:"Poppins",fontSize: ".89rem",margin : "2px 0 0 -13px",color : "#353945",lineHeight :"1.3rem"}}>
                  <li>Aromatic</li>
                  <li>Spicy</li>
                  <li>Honeyed sugary</li>
              </ul>
              
                
            </CardContent>

            <CardActions sx={{display : "flex",justifyContent :"space-between",alignItems : "center",margin : "0 1rem" }}>  
              <Typography sx={{color : "myColor.green",fontFamily : "Alice",fontSize:"2.2rem"}}>$21.99</Typography>
              <Button variant='contained' color="secondary" sx={{textTransform:"capitalize"}}>Order now</Button>
            </CardActions>
          </Card>
               
         </Slider>

    </Box>
  )

}


export default Cards