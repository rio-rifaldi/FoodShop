import { ReactNode } from 'react'

import { Box} from '@mui/material';

interface tabpanelProps {
   children? :ReactNode,
   value: number,
   index:number
  }

function TabPanel(props:tabpanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 2,px:".2rem" }}>
             {children}
        </Box>
      )}
    </div>
  );
}



 export function a11yProps(index:number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default TabPanel