import React from 'react'
import { useSortPacks } from 'features/pack/hook/useSortPacks'
import { Paginator } from 'common/components'

export const PaginatorPacks = () => {
  const { getNewPage, packs } = useSortPacks()

  return <Paginator pageCount={packs?.pageCount!}
                    page={packs?.page!}
                    totalCount={packs?.cardPacksTotalCount!}
                    getNewPage={getNewPage} />
}

