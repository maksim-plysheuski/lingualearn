import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useGetPacksQuery } from 'features/pack/service/pack.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'
import { pageCountSelect, pagePackSelect } from 'features/pack/service/selectors'

export const PaginatorPacks = () => {
  const dispatch = useAppDispatch()
  const sortPackParams = useAppSelector(state => state.sortPackSlice.packParams)

  const { data } = useGetPacksQuery(sortPackParams)

  const pagePack = useAppSelector(pagePackSelect)
  const pageCountPack = useAppSelector(pageCountSelect)

  const getNewPage = (page: number, size: number) => {
    dispatch(setPackParams({ page, pageCount: size }))
  }

  return (

    <Paginator pageCount={pageCountPack ?? 4}
               page={pagePack ?? 1}
               totalCount={data!.cardPacksTotalCount}
               getNewPage={getNewPage}
    />
  )
}

