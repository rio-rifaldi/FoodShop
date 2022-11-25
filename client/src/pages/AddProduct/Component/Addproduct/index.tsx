import { gql, useMutation } from '@apollo/client'
import { AttachMoney, PhotoCamera, Send } from '@mui/icons-material'
import { Backdrop, Box, Button, Chip, CircularProgress, IconButton, InputLabel, Stack, TextField, Typography } from '@mui/material'
import { PRODUCT_MUTATION } from 'pages/AddProduct/Utils/Graphql'
import { dataInput, formData } from 'pages/AddProduct/Utils/Interfaces'
import { ChangeEvent, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Props = {}



const Addproduct = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<string[]>([])
  const [image, setImage] = useState<File[] | FileList >([])
  const {register, handleSubmit,reset,watch} = useForm<formData>()
  const [taste,   setTaste] = useState<string[]>([])
  const [AddProduct,{loading}] = useMutation(PRODUCT_MUTATION)
  const navigate = useNavigate()

  const formHadler = handleSubmit(async (data,e)  =>{
    e?.preventDefault()
    if(e?.target.key === "Enter") return false 
    const input:dataInput = {
        name : data.nameProduct,
        price : Number(data.priceProduct),
        stock : Number(data.stockProduct),
        expired : data.expiredProduct,
        taste : taste,
        description : data.descriptionProduct
    }
    console.log('fetched');

    AddProduct({variables : {file : image,input}})
    .then((result) =>{

      if(result.data && !result.errors){
        reset();
        setSelectedImage([]);
        setTaste([])
        navigate("/myFood")
    }
    } )  

    } )


    const onSelectFile =  (e:ChangeEvent<HTMLInputElement>) => {
      if(e.target.files !== null){
        let files = e.target.files
        setImage((prev) =>  [...prev,...files])
        
        for(let i = 0; i < files.length ; i++){
          const reader = new FileReader()
          reader.readAsDataURL(files[i])
          reader.onloadend = () => {
            if(reader.result){
              setSelectedImage((prev) => [...prev,reader.result as string] )

              }
            }
          }
       
      }
    
    }
    const onKeyDownTaste = useCallback((e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
      if(e.key !== "Enter") return
      let value = (e.target as HTMLInputElement).value 
      if(value !== ''){
        setTaste((prev) => [...prev,value] );
        (e.target as HTMLInputElement).value = ''
      }
    },[taste] )
    const onClickTaste = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>{
      const Watch = String(watch('tasteProduct')) 
      if(Watch !== ''){
        setTaste((prev) => [...prev,Watch] );
        reset({tasteProduct : []})
      }
    } 
    const chipColor = [
       "#D3F9D5",
       "#FCF1F1",
       "#F1F7FC",  
       "#F2EFFD",
       "#FCE5E9",
       "#F6EEFD",
       "#FCF6D8",
       "#EDFCFB",
    ]
    console.log(taste);
  return (
    <>
        <Backdrop open={loading ? true : false}>
          <CircularProgress color="inherit" />
        </Backdrop>
      <Box mt={7}  sx={{margin :{xsMenu : "5rem 1rem", md:"5rem auto"},maxWidth:"45rem"}}> 
        <Typography sx={{textAlign:"center",fontWeight:"500",fontFamily:"Alice",fontSize:"1.5rem",my:"1.2rem"}}> Add Product </Typography>
          <form
           autoComplete='off'
            onSubmit={formHadler}
            onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
            > 
                <InputLabel shrink> name Product </InputLabel>
                {selectedImage && selectedImage?.map((el,index) => {
                  return(
                    <img src={el} alt='preew'width={40} key={index} style={{margin :"0 .5rem"}}/>
                  )
                } )}
             <Box sx={{display:'flex',gap:".6rem"}}> 
                < TextField 
                  size='small'
                  required
                  fullWidth
                  {...register('nameProduct')}
                  placeholder='Name'
                />
                <IconButton aria-label="upload picture" component="label"> 
                    <input type="file" multiple hidden onChange={onSelectFile} />
                    < PhotoCamera />
                 </IconButton>
            </Box>
              <InputLabel shrink> price</InputLabel>
              < TextField 
                size='small'
                fullWidth
                required
                type={'number'}
                {...register('priceProduct')}
                InputProps={{
                  startAdornment : (< AttachMoney fontSize='small'  />)
                }}
                placeholder='Price'
              />
              <InputLabel shrink> Stock product</InputLabel>
              < TextField 
                size='small'
                required
                fullWidth
                type={'number'}
                {...register('stockProduct')}
                placeholder='Stock'
              />

              <InputLabel shrink> Expired</InputLabel>
              < TextField 
                size='small'
                required
                fullWidth
                type={'date'}
                {...register('expiredProduct')}
                
              />
              
              <InputLabel shrink> Taste</InputLabel>
              {
                taste.length !== 0 && (
              <Stack sx={{margin : "1rem 0",maxWidth:"25rem"}} direction='row' gap={2} flexWrap='wrap'> 
              {
                taste && taste.map((el,index) =>{
                  return(
                       < Chip label={el} size='small' onDelete={() => setTaste((prev) => prev.filter((data) => data !== el )  )  } sx={{width:"max-content",p:1,backgroundColor : chipColor[Math.floor(Math.random() * chipColor.length)]}} key={index}/>
                  )
                } )
              } 
               </Stack>
                )
              }
              < TextField 
                size='small'
                fullWidth
                {...register('tasteProduct')}
                InputProps={{
                  onKeyDown : onKeyDownTaste,
                  endAdornment : (<IconButton onClick={onClickTaste}  > < Send fontSize='small' color='action' /> </IconButton>) 
                }}
                placeholder='Taste'
              />
              <InputLabel shrink> Description</InputLabel>
              < TextField 
                size='small'
                fullWidth
                multiline
                required
                rows={3}
                {...register('descriptionProduct')}
                placeholder='Description'
              />
      
              <Stack direction={'row'} gap='1rem' justifyContent={'flex-end'} mt={1.2}> 
                <Button type='reset' variant='contained' color='info'> reset </Button>
                <Button  type='submit' variant='contained' color='secondary' > Send </Button>
               </Stack>
          </form> 
          
        </Box>
      .
    </>
  )
}

export default Addproduct