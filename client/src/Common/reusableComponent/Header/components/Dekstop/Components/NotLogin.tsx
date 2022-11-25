import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {}

const NotLogin = (props: Props) => {
  return (
    <Stack direction='row' spacing={2}> 
    <Link to='/login' style={{textDecoration:"unset"}}> 
       <Button color='secondary' variant='contained' size='small'> Login </Button>
     </Link>
     <Link to='/register' style={{textDecoration:"unset"}}>  
        <Button color='secondary' variant='outlined' size='small'> Sign In </Button>
      </Link>
   </Stack>
  )
}

export default NotLogin