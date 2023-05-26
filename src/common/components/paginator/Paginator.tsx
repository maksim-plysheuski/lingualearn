import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { packAction } from 'features/pack/packs.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from 'common/components/paginator/style.module.scss'
import { ChangeEvent, FC } from 'react'
import { cardsAction } from 'features/cards/cards.slice'


type Props = {
  currentPage: number
  itemsPerPage: number
  itemsTotalCount: number
  itemsTitle: 'cards' | 'packs'
}

export const Paginator: FC<Props> = ({
                                       currentPage,
                                       itemsPerPage,
                                       itemsTotalCount,
                                       itemsTitle
                                     }) => {

  const dispatch = useAppDispatch()
  const selectedPackId = useAppSelector(state => state.cards.cardsParams.cardsPack_id)
  const pagesTotalCount = Math.ceil(itemsTotalCount / itemsPerPage) || 0
  let payload

  const handleRowsChange = (event: SelectChangeEvent) => {
    payload = { page: currentPage, pageCount: Number(event.target.value) }
    itemsTitle === 'packs'
      ? dispatch(packAction.setPackParams(payload))
      : dispatch(cardsAction.setCardsParams({ cardsPack_id: selectedPackId, ...payload }))

  }

  const handlePagesChange = (event: ChangeEvent<unknown>, selectedPage: number) => {
    payload = { page: selectedPage, pageCount: itemsPerPage }
    itemsTitle === 'packs'
      ? dispatch(packAction.setPackParams(payload))
      : dispatch(cardsAction.setCardsParams({ cardsPack_id: selectedPackId, ...payload }))
  }

  return (
    <div className={s.container}>
      <Pagination shape='rounded' color='primary' count={pagesTotalCount} onChange={handlePagesChange} />
      <span>Show</span>
      <Select
        sx={{ height: '34px', margin: '0 7px 0 7px' }}
        value={itemsPerPage ? String(itemsPerPage) : '4'}
        onChange={handleRowsChange}
      >
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'15'}>15</MenuItem>
        <MenuItem value={'25'}>25</MenuItem>
        <MenuItem value={'50'}>50</MenuItem>
      </Select>
      <span>{`${itemsTitle} per page`}</span>
    </div>
  )
}