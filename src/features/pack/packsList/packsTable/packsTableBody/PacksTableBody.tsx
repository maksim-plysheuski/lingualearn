import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'

export const PacksTableBody = () => {
  const packs = useAppSelector(state => state.packs.packs)

  return (
    <TableBody>
      {packs.cardPacks?.map((card, index) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 48 }}
        >
          <TableCell component='th' scope='row'>
            {card.name}
          </TableCell>
          <TableCell align='right'>{card.cardsCount}</TableCell>
          <TableCell align='right'>{card.updated}</TableCell>
          <TableCell align='right'>{card.user_name}</TableCell>
          <TableCell align='right'>"need to fix"</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}