import { useAppDispatch } from 'common/hooks'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useFetchCards } from 'features/cards/hooks/useFetchCards'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'common/hooks/useDebounce'


export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const { data: cards, packId } = useFetchCards()
  const [searchValue, setSearchValue] = useState<string | null>(null)
  const debounceValue = useDebounce(searchValue, 800)

  useEffect(() => {
    if (debounceValue === null) return
    dispatch(setCardsParams({ cardsPack_id: packId!, cardQuestion: debounceValue }))
  }, [debounceValue])

  const searchCardHandler = useCallback((inputValue: string) => {
    setSearchValue(inputValue)
  }, [dispatch])


  return { searchCardHandler, searchValue, cards }
}
