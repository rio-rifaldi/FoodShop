import { LocalShipping, Restaurant } from '@mui/icons-material'
import { Box, Divider, Tab, Tabs, useMediaQuery } from '@mui/material'
import { lazy, memo, Suspense, SyntheticEvent, useState } from 'react'
import TabPanel, { a11yProps } from '../../Utils/Functions/TabPanel'
import useStyles from './Style'

const OnTheWay = lazy(() => import('../ProductList'))
const Accepted = lazy(() => import('../ProductList'))




const TabOrderHistory = () => {
  const [tabsValue, setTabsValue] = useState(0)
  const tabsHandleChange = (event:SyntheticEvent,newValue:number) =>{
    setTabsValue(newValue)
} 

const match = useMediaQuery("(min-width:600px)")
const {classes}= useStyles()
  return (
    <>
          <Box className={classes.container}> 
          < Divider  />
          <Box  sx={{marginTop:".4rem"}}> 
              <Tabs value={tabsValue} onChange={tabsHandleChange} className={classes.Tabs} >

              < Tab label='on the way' {...a11yProps(0)} icon={< LocalShipping fontSize={match ? "medium" : "small"} />} iconPosition='start'/>
              < Tab label='accepted' {...a11yProps(1)} icon={< Restaurant fontSize={match ? "medium" : "small"}/>} iconPosition='start'/>
      
          </Tabs> 
              </Box>
              <Suspense fallback={<h1>loading..</h1>}>  
                  <TabPanel value={tabsValue} index={0} >                
                          < OnTheWay />
                  </TabPanel>
                  <TabPanel value={tabsValue} index={1}> 
                        < Accepted isAccepted />
                  </TabPanel>
              </Suspense>
      </Box>
    </>
  )
}

export default TabOrderHistory