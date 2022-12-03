import { Box, Divider } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import AppBar from './AppBar'
import AppBarChat from './AppBarChat'
import BoxChat from './BoxChat'
import BumbleChat from './BumbleChat'
import MessageTextField from './MessageTextField'
import SearchBox from './SearchBox'

type Props = {}
    const useStyles = makeStyles() ((theme) =>{
        return{
            container:{
                width:"80%"
            },
            chatList:{
                height:"86vh",
                overflow:"auto"
            },
            divider:{
                width : "20rem",
                margin: "0 auto"
            }
        }
    })
const ChatArea = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box className={classes.container}>
        < AppBarChat />
        <Box className={classes.chatList} mt={1} > 
            < BumbleChat reciever />
            < BumbleChat  />
            < BumbleChat reciever />
            < BumbleChat  />
            < BumbleChat reciever />
            < BumbleChat  />
            < BumbleChat reciever />
            < BumbleChat  />
            < BumbleChat  />
         < MessageTextField />
         </Box>
    </Box>
  )
}

export default ChatArea