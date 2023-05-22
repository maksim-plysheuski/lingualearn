import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'

export const PacksTableBody = () => {
  const packs = useAppSelector(state => state.packs.packs)

  const tableCellStyle = {
    wordWrap: 'break-word',
    minWidth: '150px',
    maxWidth: '200px'
  }

  return (
    <TableBody>
      {packs.cardPacks?.map((card) => (
        <TableRow key={card._id}>
          <TableCell sx={{
            ...tableCellStyle,
            paddingLeft: '40px',
            cursor: 'pointer',
            ':hover': { backgroundColor: 'rgb(245, 245, 245)' }
          }}>
            {card.name}
          </TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.cardsCount}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.updated}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.user_name}</TableCell>
          <TableCell sx={{ tableCellStyle }}>"need to fix"</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}



