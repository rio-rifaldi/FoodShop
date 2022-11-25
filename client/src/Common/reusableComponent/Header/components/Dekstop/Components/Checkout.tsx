import { ShoppingCart } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import { StateValueContext } from 'Common/ContextApi'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useStyles from 'Common/reusableComponent/Header/Style'
type Props = {}

const Checkout = (props: Props) => {
    const {state} = useContext(StateValueContext)
    const {classes} = useStyles()

  return (
    <Link to='/checkOut'> 
    <IconButton > 
        <Badge badgeContent={state.shopChart} className={classes.badge} color='secondary'> 
          < ShoppingCart color='action' />
        </Badge>
      </IconButton>  
    </Link>
  )
}

export default Checkout