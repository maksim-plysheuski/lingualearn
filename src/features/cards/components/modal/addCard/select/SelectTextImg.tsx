import React, { ChangeEvent } from 'react'
import s from 'features/cards/components/modal/addCard/select/style.module.scss'

export type SelectType = 'Text' | 'Picture'
type Props = {
  select: SelectType
  setSelect: (select: SelectType) => void
}
export const SelectTextImg = (props: Props) => {
  const { select, setSelect } = props

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value as SelectType)
  }

  return (
    <div className={s.selectContainer}>
      <label htmlFor='standard-select' className={s.label}>Choose a question format</label>
      <select id='standard-select'
              defaultValue={select}
              onChange={handleChange}
              className={s.select}
      >
        <option value={'Text'} className={s.option}>Text</option>
        <option value={'Picture'} className={s.option}>Picture</option>
      </select>
    </div>

  )
}