import { useQuery } from '@apollo/client'
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Slide } from '@mui/material/'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import logo from 'assets/images/svg//Logo.svg'
import React, { useLayoutEffect } from 'react'
import Dekstop from './components/Dekstop'
import Mobile from './components/Mobile'
import useStyles from './Style'
import { getUserProfileQuery } from './Utils/Graphql'
import { userTypeProfile } from './Utils/Interfaces'

type Props = {
  children : React.ReactElement
}

const HideOnScroll = ({children}:Props) =>{
  const trigger = useScrollTrigger()
  return(
    <Slide appear={false} direction={'down'} in={!trigger}> 
        {children}
     </Slide>
  )
} 

function Header() {
    const theme = useTheme();
    const {classes} = useStyles()
    const mathes = useMediaQuery(theme.breakpoints.up("sm"))
    const {data,loading,refetch} = useQuery<userTypeProfile>(getUserProfileQuery,{
      fetchPolicy :"cache-and-network"
    })

    useLayoutEffect(() => {
      refetch()
      return () => {
        refetch()
      };
    }, [])

  return (
    <HideOnScroll > 
        <AppBar  sx={{backgroundColor :"white" ,position:"-webkit-sticky",boxShadow: "rgba(149, 157, 165, 0.2) 0px -1px 24px"}} >  
            <Toolbar className={classes.toolbar} >  
              <img src={logo} alt="logo" className={classes.logo}/>
              {
                mathes ? (
                    < Dekstop data={data} loading={loading} />
                ):(
                    < Mobile data={data} loading={loading}/>
                )
              }
              </Toolbar>
        </AppBar>
    </HideOnScroll>

  )
}

export default Header