import React from 'react'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { Paginator } from 'common/components'

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

