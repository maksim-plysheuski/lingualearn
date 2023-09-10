import { useAppDispatch } from 'common/hooks'
import { useGetPacks } from 'features/pack/hook/useGetPacks'
import { useCallback } from 'react'
import { setPackParams } from 'features/pack/service/packs.params.slice'


export const usePaginationPacks = () => {
  const dispatch = useAppDispatch()
  const { data: packs } = useGetPacks()

  const getNewPage = useCallback((page: number, size: number) => {
    dispatch(setPackParams({ page, pageCount: size }))
  }, [dispatch])

  return { packs, getNewPage }
}