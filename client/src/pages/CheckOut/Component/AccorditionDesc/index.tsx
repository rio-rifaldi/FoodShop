import { Edit, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, IconButton, TextField, Typography } from '@mui/material'
import useUpdateDescriptionOrder from 'pages/CheckOut/Utils/Hooks/useUpdateDescriptionOrder'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
    description:string,
    id: string
}
export type output = { desc : string}

const AccorditionDesc = ({description,id}: Props) => {
    const [isEdit, setIsEdit] = useState(false)
    const {register,handleSubmit} = useForm<output>()
    const SetEdit = () => setIsEdit(true)
    const  SetNotEdit = () => setIsEdit(false)
    const {onUpdate} = useUpdateDescriptionOrder(
        {handleSubmit,
            productId:id,
            SetNotEdit    
        }
        )
  return (
    <Accordion elevation={0} sx={{backgroundColor:"transparent","&::before":{backgroundColor:"transparent"},position:'relative'}} disableGutters > 
    <AccordionSummary          
     expandIcon={<ExpandMore />}
     aria-controls="panel1a-content"
     id="panel1a-header" > 
        <Typography > Description </Typography>
     </AccordionSummary>
     <AccordionDetails > 
        {
            isEdit?(
                <>
                    <form action="" onSubmit={onUpdate}>
                        < TextField
                            size='small'
                            placeholder ='type any description'
                            multiline
                            rows={3}
                            variant="standard"
                            defaultValue={description}
                            fullWidth
                            {...register('desc')}
                        />
                        <AccordionActions sx={{display:"flex",gap:".4rem"}}> 
                          <Button type='submit' color="secondary" size='small'
                          >Edit</Button>  
                          <Button type='button' color="error" size='small' onClick={() => setIsEdit(false)}>Discard</Button>  
                         </AccordionActions>
                    </form>
                </>
            ):(
                <>
         
                    <Typography sx={{fontSize:".94rem"}}> {description}  </Typography>
                    <IconButton onClick={SetEdit}
                        sx={{position:"absolute",right:".5rem",bottom:".5rem"}}
                    > < Edit /> </IconButton >         
                </>
            )
        }
     </AccordionDetails>
 </Accordion>
  )
}

export default AccorditionDesc