import { DoneAll } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import profile from 'assets/images/svg/avatar.jpg'
import React from 'react'
import { makeStyles } from 'tss-react/mui'

type Props = {}
const useStyles = makeStyles() ((theme) =>{
    return{
        container:{
            backgroundColor : 'white',
            display :"flex",
            gap:"1.3rem",
            alignItems :"center",
            padding :"1rem"
        },
        wrapName:{
            display :"flex",
            justifyContent :"space-between",
            alignItems :"center"
        },
        name :{
            fontWeight :"bolder",
            fontSize :"1.1rem",
            textTransform :"capitalize"
        },
        time:{
            fontWeight :100,
            fontSize:".8rem"
        },
        avatar :{
            width :"3rem",
            height :"3rem"
        },
        iconDone:{
            marginRight :".5rem",
            verticalAlign :"text-top",
            fontSize :"1rem"
        },
        message:{
            fontSize:".9rem"
        }
        
    }
})

const BoxChat = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Box className={classes.container} > 
            < Avatar src={profile} className={classes.avatar}/>
          <Box sx={{width:"100%"}}> 
                <Box className={classes.wrapName}>   
                    <Typography component={'h1'} className={classes.name} > rojat shasakahj  </Typography >
                    <Typography  className={classes.time}> 12:13 PM </Typography >
                </Box>
                <Box mt={".2rem"}> 
                    <Typography  className={classes.message}> <DoneAll className={classes.iconDone} fontSize="small"/> 
 chandra was alrewady hasnsj ksjkajji... </Typography>   
                 </Box>
         </Box> 
     </Box>
  )
}

export default BoxChat