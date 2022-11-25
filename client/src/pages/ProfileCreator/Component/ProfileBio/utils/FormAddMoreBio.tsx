import { gql, useMutation } from '@apollo/client'
import { CalendarMonth, Call, Flag, Work } from '@mui/icons-material'
import { Box, Button, InputLabel, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { refetchState } from 'SetUp/StateManagement/Store'

type Props = {
  handleClose : () => void,
}
interface owner{
  firstName : string,
  lastName : string,
  username : string,
  email : string
}

export interface BioDetail {
    address : string,
    country : string,
    birthDay : string,
    numberTelp : string,
    profession : string,
    aboutMe : string,
    owner :owner
}

const mutationUserDetail = gql`
    mutation addUserDetailInfo($input: UserInputDetail!){
    addUserDetailInfo(input: $input) {
      country
      profession
      numberTelp
      birthDay
      address
      aboutMe
    }
}
`

const FormAddMoreBio = (props: Props) => {
    const {register,handleSubmit} = useForm<BioDetail>()
    const [Add,{data,loading,error}] = useMutation(mutationUserDetail)
    const dataUser = useRecoilValue(refetchState)
    
    
    
    const formHadler = handleSubmit(async (data,e) =>{
      
        e?.preventDefault()

        try {
          const user = await Add({
            variables :{
              input : data
            }
          })
          if(user && !error){
            props.handleClose()
            dataUser?.refetch()
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
         rows={4}
         {...register('aboutMe')}
       />

       <Stack direction={'row'} gap='1rem' justifyContent={'flex-end'} mt={1.2}> 
         <Button type='reset' variant='contained' color='info'> reset </Button>
         <Button  type='submit' variant='contained' color='secondary' > Send </Button>
    </Stack>
   </form> 
  )
}

export default FormAddMoreBio