import { BookmarkAddedRounded, BookmarkAddRounded, Email } from '@mui/icons-material'
import { Box, Checkbox, IconButton } from '@mui/material'
import React from 'react'

type Props = {}

const EmailAndBookmark = (props: Props) => {
  return (
    <Box>  
        <IconButton > 
            < Email  />
        </IconButton>
        < Checkbox icon={< BookmarkAddRounded />} 
        checkedIcon={< BookmarkAddedRounded />}   sx={{alignSelf:"flex-start"}} />  
        
    </Box>
  )
}

export default EmailAndBookmark