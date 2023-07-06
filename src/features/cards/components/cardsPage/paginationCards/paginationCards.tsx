import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import s from 'features/cards/components/cardsPage/paginationCards/style.module.scss'
import { setCardParams, useFetchCards } from 'features/cards/service'
import { useAppDispatch } from 'common/hooks'

export const PaginationCards = () => {
  const dispatch = useAppDispatch()
  const { data } = useFetchCards()

  const fetchPageNewCards = (page: number, size: number) => {
    dispatch(setCardParams({ page, pageCount: size }))
  }
  return (
    <div className={s.paginatorContainer}>
      <Paginator page={data?.page!} pageCount={data?.pageCount!} totalCount={data?.cardsTotalCount!}
                 getNewPage={fetchPageNewCards} />
    </div>
  )
}

