import { Link, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import chef from "assets/images/svg/Image.svg"
import useStyles from './Style'


function AlanDucase() {
    const {classes} = useStyles();
  return (
    <Box  > 
        <Typography component={"h1"} className={classes.TypographyTitle} >
             19  <Typography component={"mark"} className={classes.TypographyTitleMark}> Michelin </Typography> Stars Chef
         </Typography>    


         <Stack  mt={7} gap={4} className={classes.mainContainer} >  
            <img src={chef} alt="chef image" className={classes.image} />
            <Box className={classes.textContainer} > 
                <Box className={classes.textContainerHead}> 
                    <Typography component={"h1"} className={classes.textHeader}>Alain Ducasse – 19 Michelin Stars</Typography>
                        
                    <Link href='#/' className={classes.linkTop} > View All Restaurant </Link>
                 </Box>
                 <Typography className={classes.paragraph} my={".5rem"} > Considered by many to be one of the best chefs in the world, he’s built a business empire over the years with 36 restaurants spanning across the globe. He’s also one of only two chefs to hold 21 Michelin stars throughout his career and the first chef to own restaurants carrying three Michelin Stars in three cities. </Typography>

                 <Typography  className={classes.paragraph} my={"1rem"} > In addition to being known for world-class French cuisine, Ducasse is the only chef on this list who has sent his food into space. In 2015, Ducasse sent meals to astronauts orbiting Earth aboard the International Space Station, an accomplishment that Ducasse said he viewed as conquering ‘ the final frontier (of cooking)’. </Typography>

             </Box>

                <Link href='#/' className={classes.linkBottom} > View All Restaurant </Link>
         </Stack>

     </Box>

  )
}

export default AlanDucase