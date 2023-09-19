import { useAppDispatch } from 'common/hooks'
import { useFetchPacks } from 'features/pack/hook/useFetchPacks'
import { useCallback } from 'react'
import { setPackParams } from 'features/pack/service/packs.params.slice'


export const usePaginationPacks = () => {
  const dispatch = useAppDispatch()
  const { data: packs } = useFetchPacks()

  const getNewPage = useCallback((page: number, size: number) => {
    dispatch(setPackParams({ page, pageCount: size }))
  }, [dispatch])

  return { packs, getNewPage }
}