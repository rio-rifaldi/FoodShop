import { ShoppingCart } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import useStyles from 'Common/reusableComponent/Header/Style'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { shopCart } from 'SetUp/StateManagement/Store'
type Props = {}




const Checkout = (props: Props) => {
    const {classes} = useStyles()
    const cart = useRecoilValue(shopCart)
  console.log(cart)
  return (
    <Link to='/checkOut'> 
    <IconButton > 
        <Badge badgeContent={cart} className={classes.badge} color='secondary'> 
          < ShoppingCart color='action' />
        </Badge>
      </IconButton>  
    </Link>
  )
}

export default Checkout