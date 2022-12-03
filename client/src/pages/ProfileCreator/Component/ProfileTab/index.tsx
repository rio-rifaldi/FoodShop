import { Article, Person, Shop } from '@mui/icons-material'
import { Box, Divider, Tab, Tabs, useMediaQuery } from '@mui/material'
import { lazy, memo, Suspense, SyntheticEvent, useState } from 'react'
import TabPanel, { a11yProps } from '../../Utils/Functions/TabPanel'
import useStyles from './Style'

const AboutTab = lazy(() => import('./AboutTab'))
const BlogTab = lazy(() => import('./BlogTab'))
const ShopTab = lazy(() => import('./ShopTab'))



const ProfileTab = () => {
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

              < Tab label='Product' {...a11yProps(0)} icon={< Shop fontSize={match ? "medium" : "small"} />} iconPosition='start'/>
              < Tab label='Blog' {...a11yProps(1)} icon={< Article fontSize={match ? "medium" : "small"}/>} iconPosition='start'/>
              < Tab label='About Me' {...a11yProps(2)} icon={< Person fontSize={match ? "medium" : "small"}/>} iconPosition='start'/>
          </Tabs> 
              </Box>
              <Suspense fallback={<h1>loading..</h1>}>  
                  <TabPanel value={tabsValue} index={0} >                
                          < ShopTab />
                  </TabPanel>
                  <TabPanel value={tabsValue} index={1}> 
                        < BlogTab  />
                  </TabPanel>

                  <TabPanel value={tabsValue} index={2}> 
                      < AboutTab  />
                  </TabPanel>
              </Suspense>
      </Box>
    </>
  )
}

export default memo(ProfileTab)