import React from 'react'
import s from 'features/cards/components/modal/addCardModal/select/style.module.scss'
import { selectOptionsStyle, selectorStyle } from 'common/components/paginator/style'
import MenuItem from '@mui/material/MenuItem'
import { Select, SelectChangeEvent } from '@mui/material'

export type SelectType = 'Text' | 'Picture'
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
    <div className={s.selectContainer}>
      <label htmlFor='select-format'>Choose a question format</label>
      <Select id='select-format'
              sx={{ ...selectorStyle, marginTop: '2px' }}
              value={select}
              onChange={handleChange}
              MenuProps={{ sx: selectOptionsStyle }}
      >
        <MenuItem value={'Text'}>Text</MenuItem>
        <MenuItem value={'Picture'}>Picture</MenuItem>
      </Select>
    </div>
  )
}