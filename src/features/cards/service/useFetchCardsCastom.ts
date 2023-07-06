import { useParams } from 'react-router-dom'
import { useFetchCardsQuery } from 'features/cards/service/card.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { FetchCardType } from 'features/cards/service/type'
import { setCardParams } from './paramsCard.Slice'

export const useFetchCards = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const cardParams = useAppSelector(state => state.paramsCard)

  const { data, isLoading } = useFetchCardsQuery(cardParams)

  return {
    data,
    isLoading
  }
}

