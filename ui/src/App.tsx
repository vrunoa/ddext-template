/* eslint-env browser */
import React from 'react';
import { Typography, Stack} from '@mui/material';

export function App() {
  
  const [targetDialogState, setTargetDialog] = React.useState<boolean>(false);

  return (
    <>
      <Stack direction={"row"}>
        <Typography>A Docker extension template</Typography>
      </Stack>
    </>
  );
}
