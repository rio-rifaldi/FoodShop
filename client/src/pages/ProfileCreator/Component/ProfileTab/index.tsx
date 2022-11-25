import { Article, Person, Shop } from '@mui/icons-material'
import { Box, Divider, Tab, Tabs, useMediaQuery } from '@mui/material'
import { lazy, memo, Suspense, SyntheticEvent, useState } from 'react'
import TabPanel, { a11yProps } from '../../Utils/TabPanel'

const AboutTab = lazy(() => import('./AboutTab'))
const BlogTab = lazy(() => import('./BlogTab'))
const ShopTab = lazy(() => import('./ShopTab'))

type Props = {
}

const ProfileTab = (props: Props) => {
  const [tabsValue, setTabsValue] = useState(0)
  const tabsHandleChange = (event:SyntheticEvent,newValue:number) =>{
    setTabsValue(newValue)
} 
console.log('render tab index')
const match = useMediaQuery("(min-width:600px)")
  return (
    <>
     
          <Box sx={{margin:{xsMenu:"1.5rem .6rem",mdMenu :"1.5rem auto"},maxWidth:{sm:"100%",mdMenu:"57rem"}}}> 
          < Divider  />
          <Box  sx={{marginTop:".4rem"}}> 
              <Tabs value={tabsValue} onChange={tabsHandleChange} sx={{
                "& .MuiTabs-flexContainer":{justifyContent:"center",gap:".3rem"},
                "& button.Mui-selected":{backgroundColor:"rgba(4, 185, 11,.7)"},
                "& .mui-1aquho2-MuiTabs-indicator":{backgroundColor:"myColor.green"},
                "& button" :{
                  textTransform:"capitalize",
                  fontSize :".94rem",
                  padding :".1rem .6rem",
                  minHeight:"2.5rem"
                }      
              }}  >

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