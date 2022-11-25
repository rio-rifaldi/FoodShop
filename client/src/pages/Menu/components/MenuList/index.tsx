import {  Grid } from '@mui/material'
import SimpleCard from 'Common/reusableComponent/SimpleCard'
import topoki from 'assets/images/svg/Tokpokki.svg'
import { makeStyles } from 'tss-react/mui'
import useStyles from './Style'


function MenuList() {
    const {classes}  = useStyles()
  return (
                                            
        <Grid container className={classes.container}> 
            <Grid item >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki dffd fdfdf fdfdfdsssssssss'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >   
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
            <Grid item  >  
                < SimpleCard image={topoki} alt='topoki' name={'Topoki'} labelRating={297} price={20.4} rating={3.5} />
            </Grid>
           
        
        </Grid>
   
  )
}

export default MenuList