import { useAppSelector } from 'common/hooks'
import { selectCardsParams } from 'features/cards/selectors'
import { useGetCardsQuery } from 'features/cards/service/cards.api'
import { useParams } from 'react-router-dom'


export const useFetchCards = () => {
  const cardsParams = useAppSelector(selectCardsParams)
  const { packId } = useParams<{ packId: string }>()

  return {
    ...useGetCardsQuery({ ...cardsParams, cardsPack_id: packId! }),
    packId
  }
}