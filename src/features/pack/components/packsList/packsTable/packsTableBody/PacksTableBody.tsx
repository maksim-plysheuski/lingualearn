import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router/path'
import * as React from 'react'
import {
  LearnPack
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/learnPack/LearnPack'
import {
  EditPack
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/editPack/EditPack'
import {
  RemovePack
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/removePack/RemovePack'

const tableCellStyle = {
  wordWrap: 'break-word',
  minWidth: '150px',
  maxWidth: '200px',
  color: 'white',
  borderBottom: '1px solid #333333'
}

export const PacksTableBody = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const packs = useAppSelector(state => state.packs.packs)

  const openSelectedPack = (packId: string) => {
    dispatch(cardsThunks.fetchCards({ cardsPack_id: packId }))
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
            ':hover': { backgroundColor: '#333333' }
          }}
                     onClick={() => openSelectedPack(pack._id)}
          >
            {pack.name}
          </TableCell>
          <TableCell sx={tableCellStyle}>{pack.cardsCount}</TableCell>
          <TableCell sx={tableCellStyle}>{pack.updated.slice(0, 10).replaceAll('-', '.')}</TableCell>
          <TableCell sx={tableCellStyle}>{pack.user_name}</TableCell>
          <TableCell sx={tableCellStyle}>
            <LearnPack cardsCount={pack.cardsCount} />
            <EditPack pack={pack} />
            <RemovePack packName={pack.name} packId={pack._id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}