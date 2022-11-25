import { Fastfood } from '@mui/icons-material';
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import TabPanel, { a11yProps } from '../../utils/TabPanel';
import Menu from '../MenuList';
import useStyles from './Style';



function MainMenu() {
  const [value, setValue] = useState(0);
  const [foodSelect, setFoodSelect] = useState<string>('')
  const {classes}  = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const foodSelectHandler = (event:SelectChangeEvent) => setFoodSelect(event.target.value) 
  const handleChange = (event:SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  return (
    <>
    <Box mt={10}>   
    <Box sx={{maxWidth : "40rem",margin : "0 auto 1.3rem auto",textAlign: "center"}}  >
            <Typography component='h1' className={classes.title}>Get  
               <Typography component='span' className={classes.titleMark}>  special</Typography> Meal
             </Typography>

            <Typography className={classes.subTitle} >Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. </Typography>
        </Box>

            <Box className={classes.container}>
              {
                matches ? (
                  <>
                      <InputLabel shrink sx={{fontSize:"1.1rem", }} htmlFor='foodType'> Food type </InputLabel>
                      <Select
                        fullWidth
                        id='foodType'
                        value={foodSelect}
                        onChange={foodSelectHandler}
                        IconComponent={() => < Fastfood sx={{transform :"translateX(-1.3rem)",cursor:"pointer",color:"myColor.green"}}/>}
                        size='small'
                        displayEmpty
                        className={classes.selectTypeFood}
                        renderValue={
                          foodSelect !== "" ? undefined : () =>  <p className={classes.emptyDisplay}>Korean food</p>
                        }
                      > 
                          <MenuItem value={0}>Korean Food  </MenuItem>
                          <MenuItem value={1}>Asian Food  </MenuItem>
                          <MenuItem value={2}>Chinese Food  </MenuItem>
                      </Select> 
                  </>
                ):
                (
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={classes.tabs} TabIndicatorProps={{
                title :"indicator",
                sx :{height :0}
                  }}>
                <Tab disableRipple label="Korean Food" {...a11yProps(0)}  />
                <Tab disableRipple label="Asian Food" {...a11yProps(1)} />
                <Tab disableRipple label="Chinese Food" {...a11yProps(2)} />
              </Tabs>
                )
              }
                      
            </Box>
              <TabPanel value={value} index={0}>
                  < Menu />
              </TabPanel>
              <TabPanel value={value} index={1}>
                  < Menu />
              </TabPanel>
              <TabPanel value={value} index={2}>
                 < Menu />
              </TabPanel>
     </Box>

  </>
        )
      }


export default MainMenu