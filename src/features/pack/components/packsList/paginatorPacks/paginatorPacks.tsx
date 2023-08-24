import React from 'react'
import { useSortPacks } from 'features/pack/hook/useSortPacks'
import { Paginator } from 'common/components'

export const PaginatorPacks = () => {
  const { pageSize, page, cardPacksTotalCount, getNewPage } = useSortPacks()

  return (
    <Paginator pageCount={pageSize}
               page={page}
               totalCount={cardPacksTotalCount}
               getNewPage={getNewPage}
    />
  )
}

