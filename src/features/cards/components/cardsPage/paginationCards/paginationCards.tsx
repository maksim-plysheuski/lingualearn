import React from 'react'
import { Paginator } from 'common/components'
import { useSortCards } from 'features/cards/hooks/useSortCards'

export const PaginationCards = () => {
  const { getNewPage, cards } = useSortCards()

  return (
      <Paginator pageCount={cards?.pageCount!}
                 page={cards?.page!}
                 totalCount={cards?.cardsTotalCount!}
                 getNewPage={getNewPage}
      />

  )
}

