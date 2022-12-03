import { Send } from '@mui/icons-material'
import { Box, Fab, TextField } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'

type Props = {}
const useStyles = makeStyles() ((theme) =>{
    return{
        input:{
            backgroundColor : "white",
            "& .MuiOutlinedInput-root.Mui-focused":{
                "&  fieldset":{
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    border :"1px solid grey"

                }
            },
            "& .MuiOutlinedInput-root:hover":{
                "& > fieldset":{
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    border :"1px solid grey"

                }
            },
        
            "& fieldset" :{
                borderRadius : ".5rem"
            },
        },
        container:{
            position:"fixed",
            bottom:"1.4rem",
            width:"68%",
            display:"flex",
            gap:"1.3rem",
            alignItems :"center"
        }
    }
})
const MessageTextField = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box component={'form'} autoComplete='off' className={classes.container}> 
        < TextField
            size='small'
            placeholder='type some message'
            className={classes.input}
            fullWidth
        />
        <Fab size='small' type='submit'> 
            < Send fontSize='small'/>    
         </Fab>
     </Box>
  )
}

export default MessageTextField