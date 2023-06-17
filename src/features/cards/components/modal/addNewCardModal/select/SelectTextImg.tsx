import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import s from 'features/cards/components/modal/addNewCardModal/select/style.module.css'

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
    <Box sx={{ minWidth: 120, marginTop: '24px', width: '1' }}>
      <FormControl fullWidth>
        <Select
          classes={{}}
          className={s.selectContainer}
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