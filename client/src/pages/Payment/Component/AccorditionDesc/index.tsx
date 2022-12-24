import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

type Props = {
    description:string,
    id: string
}
export type output = { desc : string}

const AccorditionDesc = ({description,id}: Props) => {

  return (
    <Accordion elevation={0} sx={{backgroundColor:"transparent","&::before":{backgroundColor:"transparent"},position:'relative'}} disableGutters > 
    <AccordionSummary          
     expandIcon={<ExpandMore />}
     aria-controls="panel1a-content"
     id="panel1a-header" > 
        <Typography > Description </Typography>
     </AccordionSummary>
     <AccordionDetails > 
        <Typography sx={{fontSize:".94rem"}}> {description}  </Typography>
     </AccordionDetails>
 </Accordion>
  )
}

export default AccorditionDesc