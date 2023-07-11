import React from 'react'
import { LearnPage } from 'features/learn/LearnPage'
import { useFetchAllCards } from 'features/learn/useFetchAllCards'

export const LearnPageContainer = () => {
  const { isLoading } = useFetchAllCards()
  if (isLoading) return <></>

  return (
    <LearnPage />
  )
}
