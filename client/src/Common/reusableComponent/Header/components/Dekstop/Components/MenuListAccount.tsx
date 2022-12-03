import React, { useContext } from 'react'
import useStyles from 'Common/reusableComponent/Header/Style'
import { Paperprops } from './utils/Paperprops'
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { AccountCircle, Article, Fastfood, Logout, PersonAdd } from '@mui/icons-material'
import { gql, useMutation } from '@apollo/client'
import { StateValueContext } from 'Common/ContextApi'
import { isLogined, shopCart } from 'SetUp/StateManagement/Store'
import { useResetRecoilState, useSetRecoilState } from 'recoil'

type Props = {
    achorEl:  HTMLElement | null,
    setAchorEl : React.Dispatch<React.SetStateAction<HTMLElement | null>>
}
const LOGOUT = gql`
    mutation logout{
      Logout
    }
`

const MenuListAccount = ({achorEl,setAchorEl}: Props) => {
    const {classes} = useStyles()
    const navigate = useNavigate()
    const setLogin = useSetRecoilState(isLogined)
    const [LogOut] = useMutation(LOGOUT)
    const resetCart = useResetRecoilState(shopCart)
    const open = Boolean(achorEl)
    const handleClose = () => {
        setAchorEl(null)
      }
    const logoutHaddle = async () =>{
        try {
            const data = await LogOut()
            setLogin(false)
            resetCart()
            navigate('/home',{replace : true})
            if(data.errors) throw Error
        } catch (error) {
            console.log(error)
        }
    } 

  return (

         <Menu
            anchorEl={achorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={Paperprops}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >  
        <Link to={'/profile'} className={classes.styleLink} >  
            <MenuItem > 
            <ListItemIcon > 
                < AccountCircle /> 
            </ListItemIcon>
            Profile
            </MenuItem>
            </Link>
            <Link to='myFood' className={classes.styleLink}> 
                <MenuItem > 
                    <ListItemIcon > 
                    < Fastfood />
                </ListItemIcon>
                    Product
                </MenuItem>
            </Link>
            <MenuItem > 
                <ListItemIcon > 
                < Article />
            </ListItemIcon>
                Blog
            </MenuItem>
            < Divider />
            <MenuItem > 
                <ListItemIcon > 
                < PersonAdd fontSize='small' />  
                </ListItemIcon>
                Add Another Account
            </MenuItem>
            <MenuItem onClick={logoutHaddle}> 
                <ListItemIcon > 
                < Logout fontSize='small' />  
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>  
  )
}

export default MenuListAccount