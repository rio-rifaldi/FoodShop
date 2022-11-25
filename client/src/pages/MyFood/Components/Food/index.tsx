import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import AvailableProduct from './Components/AvailableProduct'
import EmptyProduct from './Components/EmptyProduct'
import LoadingProduct from './Components/LoadingProduct'
import useFetchProduct from './Components/useFetchProduct'
import useStyles from './Style'


type Props = {}


const Food = (props: Props) => {
  const {classes} = useStyles()
  const {loading,data} = useFetchProduct()
  console.count('render')
  return (
    <>
    <Link to='/profile' style={{textDecoration:"none"}} tabIndex={-1} > 
      <Button variant='outlined' className={classes.buttonBack} startIcon={< ArrowBack sx={{color :"#353945"}} />}> Go back </Button>        
    </Link>
    {
      loading ?(
        < LoadingProduct />
      ):(
        <>
          {
            ((data?.ListProduct.length) as number === 0)?(
              < EmptyProduct />
            ):(
              < AvailableProduct />
            )
          }  
        </>
      )
    }
    </>
  )
}

export default Food