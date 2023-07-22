import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { Paginator } from 'common/components'

export const PaginationCards = () => {
  const { page, cardsTotalCount, pageCount, fetchPageNewCards } = useSearchCards()
  return (
      <Paginator
        page={page}
        pageCount={pageCount}
        totalCount={cardsTotalCount}
        getNewPage={fetchPageNewCards}
      />

  )
}

