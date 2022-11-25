import { Article, Shop } from '@mui/icons-material'
import { IconButton, Stack, Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const BlogAndFood = (props: Props) => {
  return (
    <Stack direction={'row'} gap=".3rem"> 
        <Tooltip title='my Food'>
                <Link to="/myFood" style={{textDecoration:"unset"}}> 
                <IconButton > 
                    <  Shop  />    
                </IconButton>
            </Link> 
        </Tooltip>
        <Tooltip title='my Blog'> 
            <IconButton > 
                < Article  />    
            </IconButton>
        </Tooltip>
    </Stack>
  )
}

export default BlogAndFood