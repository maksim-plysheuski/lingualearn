import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import s from './style.module.scss'
import { InputSearch } from 'common/components/Inputs/inputSearch/inputSearch'

export const InputSearchCards = () => {
  const { searchValue, searchCardHandler } = useSearchCards()

  return (
    <div className={s.inputContainer}>
      <InputSearch inputValue={searchValue ?? ""} searchCallback={searchCardHandler} />
    </div>
  )
}

