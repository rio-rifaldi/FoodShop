import React, { useState } from 'react'
import { Box, Rating } from '@mui/material';
import { SentimentDissatisfied, SentimentSatisfied, SentimentSatisfiedAlt, SentimentVeryDissatisfied, SentimentVerySatisfied, Star } from '@mui/icons-material';
import SnackbarAlert from '../SnackbarAlert';

type Props = {}

export const labels: { [index: string]: JSX.Element } = {
    0.5: < SentimentVeryDissatisfied  color="error" />,
    1: < SentimentVeryDissatisfied  color='error' />,
    1.5: <SentimentDissatisfied  color="warning"/>,
    2: <SentimentDissatisfied   color="warning"/>, 
    2.5: <SentimentSatisfied  color='info'/>,
    3: <SentimentSatisfied  color='info'/>,
    3.5: <SentimentSatisfiedAlt  color="primary"/>,
    4: <SentimentSatisfiedAlt  color="primary"/>,
    4.5: <SentimentVerySatisfied  color="secondary"/>,
    5: <SentimentVerySatisfied  color="secondary"/>    
  };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

const RatingField = (props: Props) => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false)
  }
  const onRate = (event:React.SyntheticEvent<Element, Event>, newValue:number | null) => {
    setValue(newValue);
    setOpenAlert(true)
  }
  
  return (
    <>
      <SnackbarAlert open={openAlert} handleClose={handleClose}>
          thank you for rate us
        </SnackbarAlert>
    <Box
    sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent:"flex-end"
    }}
  >
    <Rating
      name="hover-feedback"
      value={value}
      precision={0.5}
      getLabelText={getLabelText}
      onChange={onRate}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="small" />}
      size="small"
      sx={{color:'#04B90B'}}
      
    />
    {value !== null && (
      <Box sx={{ ml: 1.4,transform:"translateY(.3rem)" }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
  </Box>
    </>
  )
}

export default RatingField