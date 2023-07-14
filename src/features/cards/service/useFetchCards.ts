import { useParams } from 'react-router-dom'
import { useFetchCardsQuery } from 'features/cards/service/card.slice'
import { useAppSelector } from 'common/hooks'

export const useFetchCards = () => {
  const { packId } = useParams<{ packId: string }>()
  const cardParams = useAppSelector(state => state.paramsCard)

  return {
    ...useFetchCardsQuery({ ...cardParams, cardsPack_id: packId! }),
    packId
  }
}
