import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export type SelectType = 'Text' | 'Img'
type Props = {
  select: SelectType
  setSelect: (select: SelectType) => void
}
export const SelectTextImg = (props: Props) => {
  const { select, setSelect } = props


  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as SelectType)
  }

  return (
    <Box sx={{ minWidth: 120, marginTop: '21px', width: '1' }}>
      <FormControl fullWidth>

        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={select}
          placeholder={select}
          onChange={handleChange}
        >
          <MenuItem value={'Text'}>Text</MenuItem>
          <MenuItem value={'Img'}>Img</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}