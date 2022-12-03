import { useQuery } from '@apollo/client';
import { PhotoCamera, Send } from '@mui/icons-material';
import { Box, Button, Chip, CircularProgress, IconButton, InputLabel, Stack, TextField } from '@mui/material';
import { chipColor } from 'pages/MyFood/Utils/Functions/Color';
import { ProductDetail } from 'pages/MyFood/Utils/Graphql';
import { ProductI } from 'pages/MyFood/Utils/Interfaces';
import { useParams } from 'react-router-dom';
import AddImage from './AddImage';
import useStyles from './Style';
import UpdateData from './Update';


function Detail() {
   const {productId} = useParams()
   const {classes} = useStyles();
   const {data,loading,refetch} = useQuery<ProductI>(ProductDetail,{
      variables : {
         productId
      },
      initialFetchPolicy:"network-only"
   })
   
   const {onClickTaste,onUpdate,onKeyDownTaste,register,setTaste,taste} = UpdateData()
   const {onAddImage,loading:addImageLoad} = AddImage({refetch})

    console.count("render")
     return (
   <>
      {
         loading ? (
            <h1>loading</h1>
         ):(
            <>
               <Box className={classes.mainContainer} component={'form'} autoComplete='off' onSubmit={onUpdate}
               onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
               >

                  <Box className={classes.headerAndFire} >
         
                     <Box sx={{width:"100%"}}>  
                        <InputLabel shrink  > Name </InputLabel>
                           <Box sx={{display:"flex",gap:".6rem"}} >
                              < TextField
                                 size='small'
                                 placeholder ="Name"
                                 fullWidth
                                 defaultValue={ data?.Product.name}
                                 {...register('name')}
               
                              />
                           <IconButton aria-label="upload picture" component="label"> 
                              <input type="file"  hidden onChange={onAddImage} disabled={addImageLoad && true} />
                              {
                                 addImageLoad ?(
                                    < CircularProgress size={30} />
                                 ):(
                                    < PhotoCamera />
                                 )
                              }
                           </IconButton>
                        </Box>
                     </Box>
                        <Box sx={{width:"100%"}}> 
                        <InputLabel shrink  > Stock </InputLabel>
                           < TextField
                           size='small'
                           fullWidth
                           placeholder ="Stock"
                           defaultValue={ data?.Product.stock}
                           {...register('stock')}
                        /> 
                        </Box>
                  </Box>
         
               <Box sx={{display :" flex",gap:"1rem",my:".4rem"}}>  
                     <Box sx={{width:"100%"}} > 
                        <InputLabel shrink  > Price </InputLabel>
                           < TextField
                           size='small'
                           placeholder ="Price"
                           defaultValue={ data?.Product.price}
                           type='number'
                           fullWidth
                           {...register('price')}
                           InputProps={{
                              startAdornment : <span style={{marginRight:".8rem"}}>$</span>,
                           }}/>
                  </Box>
                  <Box sx={{width:"100%"}} > 
                        <InputLabel shrink  > Expired </InputLabel>
                           <TextField  
                              placeholder="expired"
                              type={'date'}
                              fullWidth
                              {...register('expired')}
                              defaultValue={data?.Product.expired}
                              size='small'
                           />
         
                        </Box>
         
                  </Box>
         
                        <Box  sx={{my:".4rem"}}>
                     <InputLabel shrink  > Description</InputLabel>
                        < TextField
                           size='small'
                           placeholder ="Description"
                           defaultValue={ data?.Product.description}
                           multiline
                           {...register('description')}
                           fullWidth
                           rows={3}
                              />
                     </Box>
         
                        {
                           taste?.length !== 0 && (
                        <Stack sx={{margin : "1rem 0",maxWidth:"25rem"}} direction='row' gap={2} flexWrap='wrap'> 
                        {
                           taste && taste?.map((el,index) =>{
                           return(
                                 < Chip label={el} size='small' onDelete={() => setTaste((prev) => prev.filter((data) => data !== el )  )  } sx={{width:"max-content",p:1,backgroundColor : chipColor[Math.floor(Math.random() * chipColor.length)]}} key={index}/>
                           )
                           } )
                        } 
                        </Stack>
                           )
                        }
                  <InputLabel shrink  > Taste </InputLabel>
                        < TextField 
                           size='small'
                           fullWidth
                           {...register('taste')} 
                           InputProps={{
                           onKeyDown : onKeyDownTaste,
                           endAdornment : (<IconButton onClick={onClickTaste}  > < Send fontSize='small' color='action' /> </IconButton>) 
                           }}
                           placeholder='Taste'
                        />
         
         
                     <Button type='submit' color='secondary' variant='contained' size="small" sx={{margin:"1rem 0"}}> Update </Button>
                     
               </Box>
            </>
         )
      }
   </>
  )
}

export default Detail