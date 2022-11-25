import { Box, Skeleton } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type Props = {}
const useStyles = makeStyles()((theme) => {
    return{
        productContainer :{
            mx :".3rem",
            display : "grid",
            gap : ".3rem",
            gridTemplateColumns : "1fr 1fr" ,
            [theme.breakpoints.up(600)]:{
                display : 'flex',
                flexWrap  : "wrap",
                gap :".7rem",
                justifyContent :"center"
            } 
        },
        skeletonClasses :{
            width : "100%",
            maxWidth : "13rem",
            height : "14rem",
        }   
    }
})

const LoadingProduct = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box my={10}>
    <Box  className={classes.productContainer}> 
        
        < Skeleton variant='rounded' className={classes.skeletonClasses}/>
        < Skeleton variant='rounded' className={classes.skeletonClasses}/>
        < Skeleton variant='rounded' className={classes.skeletonClasses}/>
        < Skeleton variant='rounded' className={classes.skeletonClasses}/>
     </Box>
    </Box>
  )
}

export default LoadingProduct