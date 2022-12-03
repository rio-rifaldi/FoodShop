import { DragHandle, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, Divider, IconButton, Menu } from '@mui/material'
import DrawerFunc from 'Common/reusableComponent/DrawerFunc'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { shopCart } from 'SetUp/StateManagement/Store'
import useStyles from '../Style'
import { userTypeProfile } from '../Utils/Interfaces'
type Props = {

  data : userTypeProfile | undefined,
  loading : boolean
}

function Mobile(props: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const cart = useRecoilValue(shopCart)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const {classes} = useStyles()
  return (
    <>  
      <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onTouchStart={handleClose}
            onClose={handleClose}
            onClick={handleClose}
      > 
        < DrawerFunc  data={props.data} loading={props.loading} /> 
       </Menu>
    <Box sx={{display:"flex",gap:".7rem",alignItems:"center"}} >   
    <Link to='/checkOut'> 
        <IconButton > 
            <Badge badgeContent={cart} className={classes.badge} color='secondary'> 
              < ShoppingCart color='action' />
            </Badge>
        </IconButton>
     </Link>
      < Divider orientation='vertical' flexItem sx={{height:"1.7rem",alignSelf:"center"}}/>
      <IconButton 
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
      >
         < DragHandle sx={{color : "#777E90",transform :"translateY(1px)"}} fontSize='medium' />
      </IconButton>  


     </Box>
  </>
  )
}

export default Mobile