import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useNavigate } from 'react-router-dom'
import * as React from 'react'
import { tableCellHoverSx, tableCellSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined'
import { EditPack } from './actionsButtons/editPack/EditPack'
import { RemovePack } from './actionsButtons/removePack/RemovePack'
import { LearnPack } from './actionsButtons/learnPack/LearnPack'
import { toast } from 'react-toastify'
import { selectProfileUserId } from 'features/profile/selectors/selectors'
import { useGetPacks } from 'features/pack/hook/useGetPacks'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { setIsMyPack } from 'features/pack/service/packs.params.slice'

export const PacksTableBody = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const profileUserId = useAppSelector(selectProfileUserId)
  const { data } = useGetPacks()


  const openSelectedPack = (packId: string, packUserId: string, cardsCount: number) => {
    if (packUserId === profileUserId || cardsCount) {
      dispatch(setCardsParams({ cardsPack_id: packId }))
      dispatch(setIsMyPack(packUserId === profileUserId))
      navigate(`/cards/${packId}`)
      return
    }
    toast.info('This pack is empty')
  }

  return (
    <TableBody>
      {data?.cardPacks.map((pack) => (
        <TableRow key={pack._id}>
          <TableCell sx={{ ...tableCellSx, width: '60px' }}>
            {(pack.deckCover && pack.deckCover.length > 100)
              ? <img style={{ height: '36px', borderRadius: '3px' }} src={pack.deckCover} alt={'cover'} />
              : <PanoramaOutlinedIcon sx={{ fontSize: '40px', color: '#4C4C4C' }} />
            }
          </TableCell>
          <TableCell sx={tableCellHoverSx} onClick={() => openSelectedPack(pack._id, pack.user_id, pack.cardsCount)}
          >
            {pack.name}
          </TableCell>
          <TableCell sx={tableCellSx}>{pack.cardsCount}</TableCell>
          <TableCell sx={tableCellSx}>
            {pack.updated.slice(0, 10).split('-').reverse().join('.')}
          </TableCell>
          <TableCell sx={tableCellSx}>{pack.user_name}</TableCell>
          <TableCell sx={tableCellSx}>
            <LearnPack cardsCount={pack.cardsCount} packId={pack._id} />
            <EditPack packId={pack._id} packName={pack.name} coverImage={pack.deckCover} isPrivate={pack.private} />
            <RemovePack packName={pack.name} packId={pack._id} packUserId={pack.user_id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}