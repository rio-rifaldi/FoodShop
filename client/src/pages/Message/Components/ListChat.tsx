import { Box, Divider } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import AppBar from './AppBar'
import BoxChat from './BoxChat'
import SearchBox from './SearchBox'

type Props = {}
    const useStyles = makeStyles() ((theme) =>{
        return{
            container:{
                width :"100%",
                maxWidth:"26rem",
                backgroundColor : "white" 
            },
            chatList:{
                padding :".2rem .5rem"
            },
            divider:{
                width : "20rem",
                margin: "0 auto"
            }
        }
    })
const ListChat = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box className={classes.container}>
        < AppBar />
        < SearchBox />
        < Divider />

        <Box className={classes.chatList} > 
            < BoxChat />
            < Divider className={classes.divider} />
            < BoxChat />
            < Divider className={classes.divider} />
            < BoxChat />
            < Divider className={classes.divider} />
            < BoxChat />
            < Divider className={classes.divider} />
         </Box>
    </Box>
  )
}

export default ListChat