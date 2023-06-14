import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'

export const PaginationCards = () => {
  const { page, cardsTotalCount, pageCount,fetchPageNewCards } = useSearchCards()
  return (
    <>
      <Paginator
        page={page}
        pageCount={pageCount}
        totalCount={cardsTotalCount}
        getNewPage={fetchPageNewCards}
      />
    </>
  )
}

