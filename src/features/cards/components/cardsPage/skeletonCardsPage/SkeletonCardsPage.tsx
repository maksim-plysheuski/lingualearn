import * as React from 'react'
import s from 'features/cards/components/cardsPage/skeletonCardsPage/style.module.scss'
import { TableSkeleton } from 'common/components/skeletonPreloaders/TableSkeleton'
import { PaginatorSkeleton } from 'common/components/skeletonPreloaders/PaginatorSkeleton'
import { SelectorSkeleton } from 'common/components/skeletonPreloaders/SelectorSceleton'
import { TitleBlockSkeleton } from 'common/components/skeletonPreloaders/TitleBlockSkeleton'
import { CardsTableHeader } from 'features/cards/components/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { useSelector } from 'react-redux'
import {selectIsMyCard } from 'features/cards/selectors'
import { searchBarSx } from 'common/components/skeletonPreloaders/style'
import { Skeleton } from '@mui/material'


export const SkeletonCardsPage = () => {
  const isMyCard = useSelector(selectIsMyCard)

  return (
    <div className={s.packsList}>
      <div className={s.backLink}>
        <Skeleton sx={{...searchBarSx, height: 30}} variant='text' animation='wave' />
      </div>
      <div className={s.titleBlock}>
        <TitleBlockSkeleton />
      </div>
      <div className={s.info}>
        <Skeleton sx={{...searchBarSx, height: 40}} variant='text' animation='wave' />
        <Skeleton sx={{...searchBarSx, height: 183, width: 162, mt: 0.3}} variant='rounded' animation='wave' /></div>
      <div className={s.searchBar}>
        <Skeleton sx={searchBarSx} variant='text' animation='wave' />
      </div>
      <TableSkeleton rowsCount={4} cellsCount={isMyCard ? 5 : 4} children={<CardsTableHeader />} />
      <div className={s.paginatorContainer}>
        <div className={s.paginator}><PaginatorSkeleton /></div>
        <div className={s.selector}><SelectorSkeleton /></div>
      </div>
    </div>
  )
}

