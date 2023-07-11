import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import s from 'features/cards/components/cardsPage/paginationCards/style.module.scss'
import { Paginator } from 'common/components'

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

