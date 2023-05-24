import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { ActionsButtons } from 'features/pack/packsList/packsTable/packsTableBody/actionsButtons/ActionsButtons'

export const CardTableBody = () => {
  const packs = useAppSelector(state => state.packs.packs)
  const tableCellStyle = {
    wordWrap: 'break-word',
    minWidth: '150px',
    maxWidth: '200px'
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
          }}>
            {pack.name}
          </TableCell>
          <TableCell sx={{ tableCellStyle }}>{pack.cardsCount}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{pack.updated.slice(0, 10).replaceAll('-', '.')}</TableCell>
          <TableCell sx={{ tableCellStyle }}>Rating Need To fix</TableCell>
          <ActionsButtons packId={pack._id} />
        </TableRow>
      ))}
    </TableBody>
  )
}



