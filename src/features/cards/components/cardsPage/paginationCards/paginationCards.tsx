import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { Paginator } from 'common/components'

export const PaginationCards = () => {
  const { getNewPage, cards } = useSearchCards()

  return (
      <Paginator
        pageCount={cards?.pageCount!}
        page={cards?.page!}
        totalCount={cards?.cardsTotalCount!}
        getNewPage={getNewPage}
      />

  )
}

