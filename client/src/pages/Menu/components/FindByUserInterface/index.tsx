import { Search } from '@mui/icons-material';
import { Button, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import useStyles from './Style';

type Props = {
    setQuerySearch ?: (query : string) => void
}
type outputForm ={
    query : string
}

const FindByUserInterface = (props: Props) => {
    const {classes,theme} = useStyles();
    const tablet = useMediaQuery(theme.breakpoints.up(750))
    const { register, handleSubmit,reset ,getFieldState} = useForm<outputForm>()


    const onSubmit = handleSubmit((data,e) => {
        e?.preventDefault()
        console.log(data)
        // props?.setQuerySearch(data.query)
        reset()
        
      })

  return (
    <form action="" className={classes.searchForm} onSubmit={onSubmit}>
    < TextField 
        className={classes.inputSearch}
        placeholder="Search by Name Food, ...."
        fullWidth
        required
        size={tablet ? "medium" : "small"}
        {...register("query")}
        InputProps={{
            startAdornment : (<InputAdornment position='start' > < Search sx={{color:"neutrals.grey"}} /> </InputAdornment>),
            endAdornment :(
                <InputAdornment position='end' > <Button variant='contained' color='secondary' size={tablet ? "medium" : "small"} sx={{textTransform:"capitalize"}}> Search  </Button> </InputAdornment>
            )
        }}
    />
</form>
  )
}

export default FindByUserInterface