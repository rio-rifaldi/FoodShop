import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useStyles from '../Style'
import emptyProduct from 'assets/images/svg/emptyProduct.svg'
import { Link } from 'react-router-dom'


type Props = {}

const EmptyProduct = (props: Props) => {
    const {classes}  = useStyles()
  return (
    <Box className={classes.boxEmptyImage}>
    <img src={emptyProduct} alt="emptyProduct" className={classes.imageEmpty} />
    <Typography sx={{color :"neutrals.grey",textAlign:"center"}}> you dont have product yet  </Typography>
    <Link to={'AddProduct'} style={{textDecoration:"unset"}}>  
          <Button variant='outlined' size='small' color={'secondary'} sx={{display:"block",margin:".8rem auto"}}> Add Product  </Button>
    </Link>

</Box>
  )
}

export default EmptyProduct