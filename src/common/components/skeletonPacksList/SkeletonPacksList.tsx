import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { tableCellSx, tableSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { PacksTableHeader } from 'features/pack/components/packsList/packsTable/packsTableHeader/PacksTableHeader'
import * as React from 'react'
import s from './style.module.scss'


const skeletonSx = { bgcolor: 'grey.900', height: 40, width: '100%' }


export const SkeletonPacksList = () => {
  return (
    <div className={s.packsList}>
      <div className={s.titleBlock}>
        <Skeleton sx={{ ...skeletonSx, width: 150, height: 55 }} variant='text' animation='wave' />
        <Skeleton sx={{ ...skeletonSx, width: 175, height: 55 }} variant='text' animation='wave' />
      </div>
      <div className={s.searchBar}>
        <SearchBarSkeleton/>
      </div>
      <TableSkeleton rows={4} cells={6}/>
      <div className={s.paginatorContainer}>
        <div className={s.paginator}>
          <PaginatorSkeleton />
        </div>
        <div className={s.selector}>
          <SelectorSkeleton />
        </div>
      </div>
    </div>
  )
}

type tableProps = {
  rows: number
  cells: number
}

const TableSkeleton = (props: tableProps) => {
  let cell = []
  const row = []
  for (let i = 0; i < props.cells; i++) {
    cell.push(i)
  }
  for (let i = 0; i < +props.rows; i++) {
    row.push(i)
  }



  const tableCell = cell.map((c, i) => (
    <TableCell sx={{ ...tableCellSx, height: '59px' }} key={i}>
      <Skeleton sx={skeletonSx} variant='text' />
    </TableCell>
  ))

  return(
    <TableContainer sx={{ ...tableSx, mt: '30px' }} component={Paper}>
      <Table>
        <PacksTableHeader />
        <TableBody>
          {row.map((r, i) => (
            <TableRow key={i}>
              {tableCell}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


const SearchBarSkeleton = () => {
  const searchBarSx = { ...skeletonSx, height: 55 }
  return(
    <>
      <Skeleton sx={{ ...searchBarSx, width: 300 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...searchBarSx, width: 228 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...searchBarSx, width: 250 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...searchBarSx, width: 140 }} variant='text' animation='wave' />
    </>
  )
}


const PaginatorSkeleton = () => {
  const paginatorSx = { ...skeletonSx, height: 35, width: 32, mr: 1.5 }
  return(
    <>
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
    </>
  )
}

const SelectorSkeleton = () => {
  const selectorSx = { ...skeletonSx, height: 35, mr: 1.5 }
  return(
    <>
      <Skeleton sx={{...selectorSx, width: 40, height: 25}} variant='rounded'  animation='wave' />
      <Skeleton sx={{...selectorSx, width: 75}} variant='rounded'  animation='wave' />
      <Skeleton sx={{...selectorSx, width: 80, height: 25}} variant='rounded'  animation='wave' />
    </>
  )
}