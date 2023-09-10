import React from 'react'
import { Paginator } from 'common/components'
import { usePaginationPacks } from 'features/pack/hook/usePaginationPacks'

export const PaginatorPacks = () => {
  const { packs, getNewPage } = usePaginationPacks()

  return <Paginator pageCount={packs?.pageCount!}
                    page={packs?.page!}
                    totalCount={packs?.cardPacksTotalCount!}
                    getNewPage={getNewPage} />
}

