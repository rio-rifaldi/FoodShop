import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import React from 'react'
import profile from 'assets/images/svg/avatar.jpg'
import { Archive, DeleteForever, MarkChatRead, MoreVert, SelectAll } from '@mui/icons-material'


type Props = {}
    
const AppBar = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
    <Box sx={{
        display :"flex",
        justifyContent :"space-between",
        padding :".6rem 1rem",
        backgroundColor :"myColor.greenTrans"
    }}> 
        < Avatar src={profile} />
            
        <IconButton 
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'option-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        > 
          < MoreVert />
         </IconButton>
     </Box>
     <Menu
        anchorEl={anchorEl}
        id="option-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
   
        <MenuItem>
          <ListItemIcon>
            < Archive fontSize="small" />
          </ListItemIcon>
          Archive
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            < SelectAll fontSize="small" />
          </ListItemIcon>
          Select All
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <DeleteForever fontSize="small" color={'error'} />
          </ListItemIcon>
          Delete All
        </MenuItem>
      </Menu>
    </>
     
  )
}

export default AppBar