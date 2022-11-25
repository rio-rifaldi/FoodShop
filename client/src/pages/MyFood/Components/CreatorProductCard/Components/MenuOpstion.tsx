import { DeleteForever, Edit, MoreVert, RemoveRedEye } from '@mui/icons-material'
import { Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../Style'

type Props = {
    anchorEl : HTMLElement | null,
 setAnchorEl : React.Dispatch<React.SetStateAction<HTMLElement | null>>,
 id:string | undefined,
 onOpen: () => void
}

const MenuOpstion = ({anchorEl,setAnchorEl,id,onOpen}: Props) => {
    const {classes} = useStyles()
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
         <IconButton className={classes.iconButton} 
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            
          > 
              < MoreVert />
          </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            className:classes.MenuPaperProps
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
              <Link to={`/myFood/detail/${id}`} style={{color:"black",textDecoration:"unset"}}>
                <MenuItem>
                  <ListItemIcon>
                    < RemoveRedEye fontSize="small" />
                  </ListItemIcon>
                  See product Detail
                </MenuItem>
              </Link>
             <Link to={`/myFood/update/${id}`} style={{color:"black",textDecoration:"unset"}}>
              <MenuItem>
                <ListItemIcon>
                  <Edit fontSize="small" />
                </ListItemIcon>
                Edit
              </MenuItem>
              </Link>
              <Divider />
              <MenuItem sx={{color :"red"}} onClick={onOpen}>
                <ListItemIcon>
                  <DeleteForever fontSize="small" color="error" />
                </ListItemIcon>
                Delete
              </MenuItem>
        </Menu>
    
    </>
  )
}

export default MenuOpstion