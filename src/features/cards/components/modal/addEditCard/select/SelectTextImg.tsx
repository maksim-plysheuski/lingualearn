import React, { ChangeEvent } from 'react'
import s from 'features/cards/components/modal/addEditCard/select/style.module.scss'

export type SelectType = 'Text' | 'Img'
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
      <label htmlFor='standard-select'>Choose a question format</label>
      <select id='standard-select'
              defaultValue={select}
              onChange={handleChange}
              className={s.select}
      >
        <option value={'Text'} className={s.option}>Text</option>
        <option value={'Img'} className={s.option}>Img</option>
      </select>
    </div>

  )
}