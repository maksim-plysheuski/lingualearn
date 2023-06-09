import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router'
import * as React from 'react'
import { tableCellHoverStyle, tableCellStyle } from 'common/style/tableStyle'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined'
import { EditPack } from './actionsButtons/editPack/EditPack'
import { RemovePack } from './actionsButtons/removePack/RemovePack'
import { LearnPack } from './actionsButtons/learnPack/LearnPack'
import { packsSelect } from 'features/pack/selectors'


export const PacksTableBody = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const packs = useAppSelector(packsSelect)


  const openSelectedPack = (packId: string) => {
    dispatch(cardsThunks.fetchCards({ cardsPack_id: packId }))
    navigate(paths.CARDS)
  }

  return (
    <TableBody>
      {packs.cardPacks?.map((pack) => (
        <TableRow key={pack._id}>
          <TableCell sx={{ ...tableCellStyle, maxWidth: '60px' }}>
            {pack.deckCover
              ? <img style={{ height: '36px' }} src={pack.deckCover} alt={'cover'} />
              : <PanoramaOutlinedIcon sx={{ fontSize: '40px', color: '#4C4C4C' }} />
            }
          </TableCell>
          <TableCell sx={tableCellHoverStyle}
                     onClick={() => openSelectedPack(pack._id)}
          >
            {pack.name}
          </TableCell>
          <TableCell sx={tableCellStyle}>{pack.cardsCount}</TableCell>
          <TableCell sx={tableCellStyle}>
            {pack.updated.slice(0, 10).split('-').reverse().join('.')}
          </TableCell>
          <TableCell sx={tableCellStyle}>{pack.user_name}</TableCell>
          <TableCell sx={tableCellStyle}>
            <LearnPack cardsCount={pack.cardsCount} packId={pack._id} />
            <EditPack pack={pack} />
            <RemovePack packName={pack.name} packId={pack._id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}