import { PacksTableHeader } from 'features/pack/components/packsList/packsTable/packsTableHeader/PacksTableHeader'
import * as React from 'react'
import s from './style.module.scss'
import { TableSkeleton } from 'common/components/skeletonPreloaders/TableSkeleton'
import { PaginatorSkeleton } from 'common/components/skeletonPreloaders/PaginatorSkeleton'
import { SearchBarSkeleton } from 'common/components/skeletonPreloaders/SearchBarSkeleton'
import { SelectorSkeleton } from 'common/components/skeletonPreloaders/SelectorSceleton'
import { TitleBlockSkeleton } from 'common/components/skeletonPreloaders/TitleBlockSkeleton'


export const SkeletonPacksList = () => {
  return (
    <div className={s.packsList}>
      <div className={s.titleBlock}><TitleBlockSkeleton /></div>
      <div className={s.searchBar}><SearchBarSkeleton /></div>
      <TableSkeleton rowsCount={4} cellsCount={6} children={<PacksTableHeader />} />
      <div className={s.paginatorContainer}>
        <div className={s.paginator}><PaginatorSkeleton /></div>
        <div className={s.selector}><SelectorSkeleton /></div>
      </div>
    </div>
  )
}

