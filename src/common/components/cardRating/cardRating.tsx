import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export const CardRating = (props: any) => {
  const [value, setValue] = React.useState<number | null>(3);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/*<Typography component="legend">Controlled</Typography>*/}
      <Rating name="simple-controlled" value={props.grade} onChange={(event, newValue)=> {
          setValue(newValue);
        }}
      />


    </Box>
  );
}