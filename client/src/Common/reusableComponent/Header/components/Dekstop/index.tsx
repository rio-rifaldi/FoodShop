import { List } from '@mui/material'
import { StateValueContext } from 'Common/ContextApi'
import { useContext } from 'react'
import useStyles from '../../Style'
import { userTypeProfile } from '../../Utils/Interfaces'
import Checkout from './Components/Checkout'
import ListNav from './Components/ListNav'
import Logined from './Components/Logined'
import NotLogin from './Components/NotLogin'

type Props = {

  data : userTypeProfile | undefined,
  loading : boolean
}

const Dekstop = (props: Props) => {
    const {state} = useContext(StateValueContext)
    const {classes} = useStyles()
  
  return (
    <>
    <List className={classes.list}>

      < ListNav />
      < Checkout />
      {
        state.isLogined ?
        (
        < Logined data={props.data} loading={props.loading} />
        ):(
          < NotLogin />
        )
      }

    </List>

  </>
  )
}

export default Dekstop