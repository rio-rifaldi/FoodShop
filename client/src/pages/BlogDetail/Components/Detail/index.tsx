import { Box, Chip, Link, Typography } from '@mui/material';
import salad from 'assets/images/svg/foodSalad.svg';
import vegetables from 'assets/images/svg/vegetables.svg';
import useStyles from './Style';

function Detail() {
    const {classes} = useStyles();
  return (
    <Box className={classes.mainContainer}  > 
            <Box className={classes.imageBox} >    
                    <img src={salad} alt="salad image" className={classes.imageHead} />  
                    <Box className={classes.chipWrrap}> 
                        < Chip label="Food" className={classes.green} size='small' />
                        < Chip label="Healthy" className={classes.red} size='small' />
                        < Chip label="Family" className={classes.blue} size='small' />
                    </Box>
             </Box>
         <Box className={classes.mainContent}>  

                <Typography component='h1' className={classes.title}> Healthy Food Choices for Your Family every day </Typography>
                <Typography component='li' className={classes.time}> Jun 20, 2022 </Typography>

                <Typography component='h2' className={classes.subTitle}> ​How can you ensure that your child is well nourished? </Typography>
                {/* <Typography className={classes.paragraf}>  </Typography>
                <Typography className={classes.subTitle} >  </Typography> */}

                <Typography className={classes.paragraf}> Here are some tips to keep in mind when planning and preparing meals for your family. </Typography>

                <img src={vegetables} alt="vegetables" className={classes.vegetables}/>

                <Typography className={classes.subTitle} component='h2'> The five food groups and typical minimum servings: </Typography> 
                
              
                <Typography className={classes.paragraf}>  <Typography component='span' className={classes.span} role="heading"> Vegetables: </Typography> 3-5 servings per day. A serving may consist of 1 cup of raw leafy vegetables, 3/4 cup of vegetable juice, or 1/2 cup of other vegetables, chopped raw or cooked. </Typography>

             
                <Typography className={classes.paragraf}> <Typography component='span' className={classes.span}> Fruits: </Typography> 2-4 servings per day. A serving may consist of 1/2 cup of sliced fruit, 3/4 cup of fruit juice, or a medium-size whole fruit, like an apple, banana, or pear. </Typography>
                <Typography className={classes.paragraf}> Bread, cereal, or pasta: 6-11 servings per day. Each serving should equal 1 slice of bread, 1/2 cup of rice or pasta, or 1 ounce of cereal. </Typography>

             
                <Typography className={classes.paragraf}>  <Typography component='span' className={classes.span}> Protein foods:  </Typography> 2-3 servings of 2-3 ounces of cooked lean meat, poultry, or fish per day. A serving in this group may also consist of 1/2 cup of cooked dry beans, one egg, or 2 tablespoons of peanut butter for each ounce of lean meat. </Typography>

              
                <Typography className={classes.paragraf}>  <Typography component='span' className={classes.span}> Dairy products: </Typography> 2-3 servings per day of 1 cup of low-fat milk or yogurt, or 1 1/2 ounces of natural cheese.</Typography>
                

                <Typography className={classes.subTitle} component='h2'> Fiber</Typography> 
                <Typography className={classes.paragraf}> 
                    <Link component='a' href='#/' className={classes.markLink}>Fiber </Link>
                    is a carbohydrate component of plant foods that is usually un-digestible. It is found in foods like
                    <Link component='a' href='#/' className={classes.markLink}> fruits,vegetables,</Link>
                    whole-grain breads, cereals, brown rice, beans, seeds, and nuts.
                 </Typography>

                
                 <Typography  className={classes.paragraf}> <Typography component='span' className={classes.span}> In adults: </Typography> Increased fiber has been linked with a reduction of chronic gastrointestinal problems, including colon cancer, irritable bowel syndrome, and diverticulitis. </Typography>

                 
                 <Typography  className={classes.paragraf}> <Typography component='span' className={classes.span}> In children: </Typography> Fiber's only proven benefit is its ability to ease constipation—providing bulk that can promote regular bowel movements, soften the stools, and decrease the time it takes food to travel through the intestines. But since food preferences and eating habits often get searly in life, and since high-fiber foods contain other nutrients, parents should include these foods in children's daily diets. See this post to know 
                 <Link component='a' href='#/' className={classes.markLink}> Kids Need Fiber: Here's Why and How.</Link>
                  </Typography>
         </Box>  
     </Box>
  )
}

export default Detail