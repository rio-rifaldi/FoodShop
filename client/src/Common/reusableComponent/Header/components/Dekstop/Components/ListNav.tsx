import { Typography, useTheme } from '@mui/material'
import React from 'react'
import useStyles from 'Common/reusableComponent/Header/Style'
import { NavLink } from 'react-router-dom'
type Props = {}

const ListNav = (props: Props) => {

    const {classes} = useStyles()
    const theme = useTheme();
    const isActiveLink = ({isActive}:any) =>{
        return {
          color : isActive ? theme.palette.myColor.green : theme.palette.neutrals.grey
        }
      } 
  return (
    <>  
        <Typography component={"li"}><NavLink to="home" style={isActiveLink} className={classes.listItem} > Home </NavLink> </Typography>

        <Typography component={"li"}><NavLink to="menu"style={isActiveLink} className={classes.listItem}> Menu </NavLink> </Typography>

        <Typography component={"li"}><NavLink to="blog" style={isActiveLink} className={classes.listItem}> Blog </NavLink> </Typography>

        <Typography component={"li"}><NavLink to="contact" style={isActiveLink} className={classes.listItem}> Contact </NavLink> </Typography>

    </>
  )
}

export default ListNav