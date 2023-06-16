import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import s from './style.module.scss'

export const PaginationCards = () => {
  const { page, cardsTotalCount, pageCount, fetchPageNewCards } = useSearchCards()
  return (
    <div className={s.paginatorContainer}>
      <Paginator
        page={page}
        pageCount={pageCount}
        totalCount={cardsTotalCount}
        getNewPage={fetchPageNewCards}
      />
    </div>
  )
}

