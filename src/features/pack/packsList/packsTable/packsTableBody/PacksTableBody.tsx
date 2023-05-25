import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { ActionsButtons } from 'features/pack/packsList/packsTable/packsTableBody/actionsButtons/ActionsButtons'
import { cardsAction } from 'features/cards/cards.slice'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router/path'

export const PacksTableBody = () => {
  const dispatch = useAppDispatch()
  const packs = useAppSelector(state => state.packs.packs)
  const navigate = useNavigate()
  const tableCellStyle = {
    wordWrap: 'break-word',
    minWidth: '150px',
    maxWidth: '200px'
  }

  const openSelectedPack = (packId: string) => {
    dispatch(cardsAction.setCardsParams({ cardsPack_id: packId }))
    navigate(paths.CARDS)
  }

  return (
    <TableBody>
      {packs.cardPacks?.map((pack) => (
        <TableRow key={pack._id}>
          <TableCell sx={{
            ...tableCellStyle,
            paddingLeft: '40px',
            cursor: 'pointer',
            ':hover': { backgroundColor: 'rgb(245, 245, 245)' }
          }}
                     onClick={() => openSelectedPack(pack._id)}
          >
            {pack.name}
          </TableCell>
          <TableCell sx={{ tableCellStyle }}>{pack.cardsCount}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{pack.updated.slice(0, 10).replaceAll('-', '.')}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{pack.user_name}</TableCell>
          <ActionsButtons packId={pack._id} />
        </TableRow>
      ))}
    </TableBody>
  )
}



