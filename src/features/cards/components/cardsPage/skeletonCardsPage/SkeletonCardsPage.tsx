import {
  TableSkeleton,
  PaginatorSkeleton,
  SelectorSkeleton,
  TitleBlockSkeleton
} from 'common/components/skeletonPreloaders'
import { CardsTableHeader } from 'features/cards/components/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { searchBarSx } from 'common/components/skeletonPreloaders/style'
import { Skeleton } from '@mui/material'
import s from 'features/cards/components/cardsPage/skeletonCardsPage/style.module.scss'
import { useAppSelector } from 'common/hooks'
import { selectIsMyPack } from 'features/pack/selectors'


export const SkeletonCardsPage = () => {
  const isMyPack = useAppSelector(selectIsMyPack)

  return (
    <div className={s.packsList}>
      <div className={s.backLink}>
        <Skeleton sx={{ ...searchBarSx, height: 30 }} variant='text' animation='wave' />
      </div>
      <div className={s.titleBlock}>
        <TitleBlockSkeleton />
      </div>
      <div className={s.info}>
        <Skeleton sx={{ ...searchBarSx, height: 40 }} variant='text' animation='wave' />
        <Skeleton sx={{ ...searchBarSx, height: 183, width: 162, mt: 0.3 }} variant='rounded' animation='wave' /></div>
      <div className={s.searchBar}>
        <Skeleton sx={searchBarSx} variant='text' animation='wave' />
      </div>
      <TableSkeleton rowsCount={4} cellsCount={isMyPack ? 5 : 4} children={<CardsTableHeader />} />
      <div className={s.paginatorContainer}>
        <div className={s.paginator}><PaginatorSkeleton /></div>
        <div className={s.selector}><SelectorSkeleton /></div>
      </div>
    </div>
  )
}

