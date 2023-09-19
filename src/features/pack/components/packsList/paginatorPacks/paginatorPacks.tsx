import React from 'react'
import { Paginator } from 'common/components'
import { usePaginationPacks } from 'features/pack/hook/usePaginationPacks'

export const PaginatorPacks = () => {
  const { packs, getNewPage, isFetching } = usePaginationPacks()

  return <Paginator pageCount={packs?.pageCount!}
                    page={packs?.page!}
                    isFetching={isFetching}
                    totalCount={packs?.cardPacksTotalCount!}
                    getNewPage={getNewPage} />
}
