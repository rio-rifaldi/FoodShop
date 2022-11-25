import { DragHandle, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, Divider, IconButton, SwipeableDrawer, useMediaQuery, useTheme } from '@mui/material'
import { StateValueContext } from 'Common/ContextApi'
import DrawerFunc from 'Common/reusableComponent/DrawerFunc'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { userTypeProfile } from '..'
import useStyles from '../Style'
type Props = {

  data : userTypeProfile | undefined,
  loading : boolean
}

function Mobile(props: Props) {
    const {state} = useContext(StateValueContext)
    const [isOpen, setIsOpen] = useState(false)
    const theme = useTheme();
    const mathes = useMediaQuery(theme.breakpoints.up("sm"))
    const {classes} = useStyles()
  return (
    <>  
    <Box sx={{display:"flex",gap:".7rem",alignItems:"center"}} >   
    <Link to='/checkOut'> 
        <IconButton > 
            <Badge badgeContent={state.shopChart} className={classes.badge} color='secondary'> 
              < ShoppingCart color='action' />
            </Badge>
        </IconButton>
     </Link>
      < Divider orientation='vertical' flexItem sx={{height:"1.7rem",alignSelf:"center"}}/>
      <IconButton onClick={() => !mathes && setIsOpen( true)} >
         < DragHandle sx={{color : "#777E90",transform :"translateY(1px)"}} fontSize='medium' />
      </IconButton>  


     </Box>

      <SwipeableDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={()=>  setIsOpen(true)}
      > 
        < DrawerFunc setIsOpen={setIsOpen} data={props.data} loading={props.loading} /> 
      </SwipeableDrawer> 
  </>
  )
}

export default Mobile