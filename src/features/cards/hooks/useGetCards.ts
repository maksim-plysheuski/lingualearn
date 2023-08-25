import {  useAppSelector } from 'common/hooks'
import { selectCardsParams } from 'features/cards/selectors'
import { useGetCardsQuery } from 'features/cards/service/cards.api'


export const useGetCards =  () => {
  const cardsParams = useAppSelector(selectCardsParams)

  return useGetCardsQuery(cardsParams)
}