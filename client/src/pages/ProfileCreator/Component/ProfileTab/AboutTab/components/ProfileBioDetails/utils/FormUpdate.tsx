import { gql, useMutation } from '@apollo/client'
import { CalendarMonth, Call, Flag, Work } from '@mui/icons-material'
import { Box, Button, InputLabel, Stack, TextField } from '@mui/material'
import { BioDetail } from 'pages/ProfileCreator/Component/ProfileBio/utils/FormAddMoreBio'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'

type Props = {
  handleClose : () => void,
}


const mutationUserDetailUpdate = gql`
    mutation updateProfileBioDetail($input: UserInputDetail!){
      updateUserDetailInfo(input: $input) {
        aboutMe
        address
        birthDay
      }
    }
`

const FormUpdate = (props: Props) => {
    const {register,handleSubmit} = useForm<BioDetail>()
    const [Update,{error}] = useMutation(mutationUserDetailUpdate)

    const User = useRecoilValue (refetchState)
    let data = User?.data
    let dataDetail = User?.data?.getUser.UserDetail

    const formHadler = handleSubmit(async (data,e) =>{
      
        e?.preventDefault() 

        try {
          const user = await Update({
            variables :{
              input : data
            }
          })
          if(user && !error){
            props.handleClose()
            User?.refetch()
          }else{
            console.log(error);
            throw Error
          }
          
        } catch (err) {
          console.log(err);
        }
    } )
  return (
    <form
      autoComplete='off'
     onSubmit={formHadler}
     onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
     > 


       <InputLabel shrink> Phone Number</InputLabel>
       < TextField 
         size='small'
         fullWidth
         required
         defaultValue={dataDetail?.numberTelp}
         placeholder='+39 4343 2842 3434'
         type={'tel'}
         {...register('numberTelp')}
         InputProps={{
           startAdornment : (< Call fontSize='small' sx={{marginRight:".7rem"}} />)
         }}
       />

       <InputLabel shrink> Birth Day</InputLabel>
       < TextField 
         size='small'
         fullWidth
         defaultValue={dataDetail?.birthDay}
         placeholder='2004-06-13'
         type={'date'}
         {...register('birthDay')}
         InputProps = {{
            startAdornment : (< CalendarMonth fontSize='small' sx={{marginRight:".7rem"}} />)
         }}
       />
       <Box sx={{display :{sm:'flex'},gap:{sm:"1rem"}}} > 
       <Box sx={{width:"100%"}}>
          <InputLabel shrink> Profession</InputLabel>
          < TextField 
            size='small'
            fullWidth
            defaultValue={dataDetail?.profession}
            required
            placeholder='I am A'
            {...register('profession')}
            InputProps={{
                startAdornment : (< Work  fontSize='small' sx={{marginRight:".7rem"}}/>)
            }}
          />
        </Box>
      <Box sx={{width:"100%"}} >  
          <InputLabel shrink> country</InputLabel>
          < TextField 
            size='small'
            fullWidth
            required
            defaultValue={dataDetail?.country}
            placeholder='jakarta, indonesia'
            {...register('country')}
            InputProps={{
                startAdornment : (< Flag  fontSize='small' sx={{marginRight:".7rem"}}/>)
            }}
          />
          </Box>
        </Box>

    <InputLabel shrink> Address </InputLabel>
         < TextField 
           size='small'
           fullWidth
           placeholder='jl ahmad yani no 27'
           required
           defaultValue={dataDetail?.address}
           multiline
           rows={3}
           {...register('address')}
          
           
         />

       <InputLabel shrink> About me</InputLabel>
       < TextField 
         size='small'
         fullWidth
         multiline
         placeholder='hello my name is ....'
         required
         defaultValue={dataDetail?.aboutMe}
         rows={4}
         {...register('aboutMe')}
       />

       <Stack direction={'row'} gap='1rem' justifyContent={'flex-end'} mt={1.2}> 
         <Button type='reset' variant='contained' color='info'> reset </Button>
         <Button  type='submit' variant='contained' color='secondary' > update </Button>
    </Stack>
   </form> 
  )
}

export default FormUpdate