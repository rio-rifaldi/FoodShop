import { Box, TextField } from '@mui/material'
import React from 'react'
import AppBar from './Components/AppBar'
import BoxChat from './Components/BoxChat'
import BumbleChat from './Components/BumbleChat'
import ChatArea from './Components/ChatArea'
import ListChat from './Components/ListChat'
import SearchBox from './Components/SearchBox'

type Props = {}

const Message = (props: Props) => {
  return (
    <Box sx={{
      display :"flex"
    }}>
        < ListChat />
        < ChatArea />

     </Box>
  )
}

export default Message