import { TableBody, TableCell, TableRow } from '@mui/material'
import { EditPack } from 'features/pack/components/packsList/packsTableBody/actionsButtons/editPack/EditPack'
import { RemovePack } from 'features/pack/components/packsList/packsTableBody/actionsButtons/removePack/RemovePack'
import { LearnPack } from 'features/pack/components/packsList/packsTableBody/actionsButtons/learnPack/LearnPack'
import { useAppDispatch } from 'common/hooks'
import { useNavigate } from 'react-router-dom'
import { setCardParams } from 'features/cards/service'
import { useGetPack } from 'features/pack/service/useGetPack'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined'

const tableCellStyle = {
  wordWrap: 'break-word',
  maxWidth: '250px',
  color: 'white',
  borderBottom: '1px solid #333333',
  padding: '6px 24px 6px 24px',
  height: '55px'
}

const tableCellHoverStyle = {
  ...tableCellStyle,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#333333',
    transition: '300ms ease-in-out',
  }
}

export const PacksTableBody = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { data } = useGetPack()

  const openSelectedPack = async (cardsPack_id: string) => {
    await dispatch(setCardParams({ cardsPack_id }))
    navigate(`/cards/${cardsPack_id}`)
  }

  return (
    <TableBody>
      {data!.cardPacks?.map((pack: any) => (
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