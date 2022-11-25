import { gql, useQuery } from '@apollo/client'
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import logo from 'assets/images/svg//Logo.svg'
import { StateValueContext } from 'Common/ContextApi'
import { userType } from 'pages/ProfileCreator/Component/ProfileBio'
import { useContext, useLayoutEffect } from 'react'
import Dekstop from './components/Dekstop'
import Mobile from './components/Mobile'
import useStyles from './Style'

const getUserProfileQuery = gql`
  query getUser{
    getUser{
     firstName 
      lastName
       email 
      profileImage {
                url
                secureUrl
            }
    }
  }
`
export interface userTypeProfile{
      getUser:{
    firstName : string,
    lastName : string,
    email : string,
    profileImage:{
      url : string,
      secureUrl : string
    }
  }

}

function Header() {
    const theme = useTheme();
    const {classes} = useStyles()
    const {state}= useContext(StateValueContext)
    const mathes = useMediaQuery(theme.breakpoints.up("sm"))
    const {data,loading,refetch} = useQuery<userTypeProfile>(getUserProfileQuery,{
      fetchPolicy :"cache-and-network"
    })

    useLayoutEffect(() => {
      refetch()
      return () => {
        refetch()
      };
    }, [state.isLogined])

  return (
  
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


  )
}

export default Header