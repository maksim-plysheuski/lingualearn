import Stack from "@mui/material/Stack/Stack";
import LinearProgress from '@mui/material/LinearProgress/LinearProgress'


export default function LinearProgressColors() {
  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <LinearProgress variant={'determinate'} />
    </Stack>
  );
}