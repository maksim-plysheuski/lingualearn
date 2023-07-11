import { useParams } from 'react-router-dom'
import { useFetchAllCardsQuery } from 'features/cards/service'

export const useFetchAllCards = () => {
  const { packId } = useParams<{ packId: string }>()
  const { data, isLoading, isFetching } = useFetchAllCardsQuery({ cardsPack_id: packId!, pageCount: 100 })

  return {
    data,
    isLoading,
    isFetching,
    packId
  }
}

