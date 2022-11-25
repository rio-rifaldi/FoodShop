import { BookmarkAddedRounded, BookmarkAddRounded } from '@mui/icons-material'
import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

type Props = {}

const BookmarkIcon = (props: Props) => {
  return (
    <>
        < FormControlLabel
                control={< Checkbox icon={< BookmarkAddRounded />} 
                checkedIcon={< BookmarkAddedRounded />} />}
                label="Bookmark"
                labelPlacement='end'
                sx={{alignSelf:"flex-start"}}
         />
    </>
  ) 
}

export default BookmarkIcon