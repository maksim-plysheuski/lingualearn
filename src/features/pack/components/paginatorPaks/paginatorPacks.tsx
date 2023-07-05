import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'

export const PaginatorPacks = () => {
  const { pageSize, page, cardPacksTotalCount, getNewPage } = useSearchPacks()

  return (
    <Paginator pageCount={pageSize}
               page={page}
               totalCount={cardPacksTotalCount}
               getNewPage={getNewPage}
    />
  )
}

