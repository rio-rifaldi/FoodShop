import { Avatar, IconButton, Skeleton, skeletonClasses, Tooltip } from '@mui/material'
import avatar from 'assets/images/svg/blank-profile-picture.svg'
import { userTypeProfile } from 'Common/reusableComponent/Header'
import { MouseEvent, useState } from 'react'
import MenuListAccount from './MenuListAccount'
type Props = {

  data : userTypeProfile | undefined,
  loading : boolean
}

const Logined = (props: Props) => {
    const [achorEl, setAchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(achorEl)

    const handleClick = (el:MouseEvent<HTMLElement>) => {
        setAchorEl( el.currentTarget)
      }
  return (
    <>
    <Tooltip title='Account Settings'>
    
          <IconButton 
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          > 
              {
                props.loading ? (
                  < Skeleton variant='circular' animation='wave'  width="2.5rem" height="2.5rem" />
                ):(
                  
                    props.data?.getUser?.profileImage?.url === "" ?(
                      < Avatar alt='image icon' src={avatar} sx={{width:"2.5rem",height:"2.5rem" }} />  
                    ):(
                      < Avatar alt='image icon' src={props.data?.getUser?.profileImage?.url} sx={{width:"2.5rem",height:"2.5rem" }} />  
                    )
                    
                )
              }
          </IconButton>
      
    </Tooltip>

    < MenuListAccount achorEl={achorEl} setAchorEl={setAchorEl} />     
</>
  )
}

export default Logined