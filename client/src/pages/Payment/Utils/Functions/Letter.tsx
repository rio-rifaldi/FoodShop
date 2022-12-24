import { Box } from '@mui/material'
import React from 'react'


type Props={
  length?:number
}
const Letter = ({length}:Props) => {
  const letter = new Array(length).fill(true)
  return (
  <Box sx={{display:"flex",gap:"1rem",alignItems:"flex-start",justifyContent:"flex-start"}} > 
      {
        letter.map(() => {
          return(
              <>
                 <Box sx={{minWidth:"10px",height:"12px",backgroundColor:"red",
                transform:"skewX(-50deg)"
                }}></Box>
                  {/* <Box sx={{width:"1.3px",height:"1.5px",backgroundColor:"transparent",
                    transform:"skewX(-50deg)"
                }}></Box> */}
                  <Box sx={{minWidth:"10px",height:"12px",backgroundColor:"blue",
                    transform:"skewX(-50deg)"
                }}></Box>
              </>
          )
        })
      }
  </Box>
  )
}

export default Letter