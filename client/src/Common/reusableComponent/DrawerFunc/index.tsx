import { Add, Delete, Fastfood, Home, Login, Logout, MenuBook, PermPhoneMsg } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Skeleton, Stack, Typography, useTheme } from '@mui/material';
import { Dispatch, memo, SetStateAction, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import avatar from 'assets/images/svg/blank-profile-picture.svg';
import logo from 'assets/images/svg/Logo.svg';
import { StateValueContext } from '../../ContextApi';
import useStyles from './Style';
import { userTypeProfile } from '../Header/Utils/Interfaces';


type Props = { 
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>,
  data : userTypeProfile | undefined,
  loading : boolean
}

function DrawerFunc({setIsOpen,data,loading}:Props) {

  const {classes} = useStyles();
  const theme = useTheme();
  const {state} = useContext(StateValueContext)
  const isActiveLink = ({isActive}:any) =>{
    return {
      color : isActive ? theme.palette.myColor.green : theme.palette.neutrals.black
    }
  } 
  return (

       <Box className={classes.box} > 
       <List  > 
        <Box className={classes.boxLogo}>   
          <img src={logo} alt="logo"  className={classes.logo} style={{marginLeft:".9rem"}}/>
            <IconButton onClick={() => setIsOpen(false)}  > 
                < Logout />
            </IconButton >
         </Box>

          {
            state.isLogined ?(
            <Box sx={{margin:"1rem 0"}}> 
                      <Link to='/profile' style={{margin:"0 auto",width:"max-content",borderRadius:"4rem",display:"block"}} onClick={() => setIsOpen(false)} tabIndex={-1}> 
                          <IconButton  > 
                            
                          {
                      loading ? (
                        < Skeleton variant='circular' animation='wave'  width="4rem" height="4rem" />
                      ):(
                        
                          data?.getUser?.profileImage?.url === "" ?(
                            < Avatar alt='image icon' src={avatar} sx={{width:"4rem",height:"4rem" }} />  
                          ):(
                            < Avatar alt='image icon' src={data?.getUser?.profileImage?.url} sx={{width:"4rem",height:"4rem" }} />  
                          )
                  
                )
              }


                          </IconButton> 
                        </Link>

                        <Typography sx={{textAlign:"center",fontSize:".9rem",fontFamily:"Alice",fontWeight:500}}> {loading ? "...." : `${data?.getUser.firstName} ${data?.getUser.lastName}`}  </Typography>
                        <Typography sx={{textAlign:"center",fontSize:".7rem",fontFamily:"Alice",fontWeight:500}}>  {loading ? "...." : data?.getUser.email}</Typography>

                      <Stack direction={'row'} gap='.4rem' justifyContent={'center'} mt='.4rem'> 
                            <IconButton size='small'> 
                                < Logout fontSize='small'/>  
                            </IconButton>
                            <IconButton  size='small'> 
                                < Login fontSize='small'/>  
                            </IconButton>
                            <IconButton  size='small'> 
                                < Delete fontSize='small'/>  
                            </IconButton>
                            <IconButton  size='small'> 
                                < Add fontSize='small'/>  
                            </IconButton>
                      </Stack>
                      
              </Box>
            ):(
              <Stack direction='row' spacing={2} justifyContent={'center'} my={3}mt={7}> 
                <Link to='/login' style={{textDecoration:"unset"}}> 
                  <Button color='secondary' variant='contained' size='small'> Login </Button>
                </Link>
                <Link to='/register' style={{textDecoration:"unset"}}>  
                    <Button color='secondary' variant='outlined' size='small'> Sign In </Button>
                  </Link>
             </Stack>  
            )
          }

               <NavLink to="home" style={isActiveLink} className={classes.navLink} tabIndex={-1}  onClick={() => setIsOpen(false)}>
                    <ListItem disablePadding  >
                            <ListItemButton  > 
                                < Home />
                                < ListItemText primary={"Home"} className={classes.listItemText} />
                            </ListItemButton>
                    </ListItem>
               </NavLink> 

          <NavLink to="menu"style={isActiveLink} className={classes.navLink} tabIndex={-1} onClick={() => setIsOpen(false)} >
              <ListItem disablePadding  >
                      <ListItemButton  > 
                          < Fastfood />
                          < ListItemText primary={"Menu"} className={classes.listItemText} />
                      </ListItemButton>
              </ListItem>
             </NavLink>

          <ListItem disablePadding  onClick={() => setIsOpen(false)} >
                <NavLink to="blog" style={isActiveLink}  className={classes.navLink} tabIndex={-1}>
                    <ListItemButton  > 
                        < MenuBook />
                        < ListItemText primary={"Blog"} className={classes.listItemText} />
                    </ListItemButton>
                </NavLink> 
          </ListItem>

          <ListItem disablePadding  onClick={() => setIsOpen(false)} >
                <NavLink  to="contact" style={isActiveLink} className={classes.navLink} tabIndex={-1}>
                    <ListItemButton  > 
                        < PermPhoneMsg />
                        < ListItemText primary={"Contact"} className={classes.listItemText} />
                    </ListItemButton>
                </NavLink>
          </ListItem>

        </List> 
       </Box>
  
  )
}

export default DrawerFunc 