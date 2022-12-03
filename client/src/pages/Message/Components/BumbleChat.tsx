import { DoneAll } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import profile from 'assets/images/svg/avatar.jpg'
import { makeStyles } from 'tss-react/mui'

type Props = {
    reciever ?: boolean
}
const useStyles = makeStyles() ((theme) =>{
    return{
        chatWrap :{
            height :"max-content",
            minWidth :"7rem",
            width :"max-content",
            maxWidth :"22rem",
            padding :".8rem",

         
        },
        container:{
            display:"flex",
            gap:"1rem",
            margin:'3rem'
        },
        avatar :{
            width :"2rem",
            height:"2rem",
            alignSelf:"flex-end"
        },
        message :{
            fontSize :".8rem",fontFamily : "Poppins",
            textAlign:"justify"
        },
        boxTime:{
            display :"flex",
            justifyContent:"space-between",
            alignItems :"center",
            marginTop:".3rem"
        },
        time:{
            fontSize:".7rem"
        },
        iconDone:{
            fontSize:"1rem"
        }
    }
})
function BumbleChat({reciever}: Props) {
    const {classes} = useStyles()
  return (
    <Box className={classes.container} sx={ reciever ? {flexDirection:"row-reverse",justifyContent:"flex-end"} : {flexDirection:"row",justifyContent:"flex-end"}} > 
        <Box className={classes.chatWrap} sx={reciever ? {backgroundColor:"neutrals.veryYoungGrey",borderRadius :"1rem 1rem 1rem .3rem"} : { backgroundColor:"myColor.greenTrans", borderRadius :"1rem 1rem .3rem 1rem"} }> 
            <Typography className={classes.message}> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, impedit hic qui tempore est neque cupiditate quis ducimus consequuntur. Molestias tempora sunt vero doloremque tempore? Explicabo veniam assumenda molestiae alias.
            </Typography>
            <Box className={classes.boxTime} sx={reciever ? {flexDirection:"row-reverse"} : undefined}> 
                <Typography className={classes.time} > 12:30 PM </Typography>  
                {
                    !reciever &&(
                        < DoneAll className={classes.iconDone} sx={{color:"blue"}} />
                    )
                }  
            </Box>
         </Box>
         < Avatar src={profile} className={classes.avatar}/>
     </Box>
  )
}

export default BumbleChat