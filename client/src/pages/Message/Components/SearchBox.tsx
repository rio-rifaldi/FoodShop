import { Search } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'

type Props = {}
const useStyles = makeStyles() ((theme) =>{
    return{
        input:{
        },
        searchIcon:{
            marginRight:".5rem"
        },
        container:{
            padding :".4rem",
            boxSizing:"border-box",
        }
    }
})
const SearchBox = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box className={classes.container}>
        < TextField
        className={classes.input}
            placeholder='Search Message'
            size='small'
            fullWidth
            InputProps={{
                startAdornment : (<Search className={classes.searchIcon}/>)
            }}
        />
    </Box>
  )
}

export default SearchBox