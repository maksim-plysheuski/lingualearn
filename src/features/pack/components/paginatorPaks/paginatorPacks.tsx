import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'

export const PaginatorPacks = () => {
  const { pageSize, page, cardPacksTotalCount, getNewPage } = useSearchPaks()

  return (
    <Paginator pageCount={pageSize}
               page={page}
               totalCount={cardPacksTotalCount}
               getNewPage={getNewPage}
    />
  )
}

