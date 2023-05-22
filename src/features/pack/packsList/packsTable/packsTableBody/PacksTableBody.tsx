import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import SchoolIcon from '@mui/icons-material/School'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'

export const PacksTableBody = () => {
  const packs = useAppSelector(state => state.packs.packs)
  const userId = useAppSelector(state => state.packs.packParams.user_id)

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
          <TableCell sx={{ tableCellStyle }}>{card.updated.slice(0, 10).replaceAll('-', '.')}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.user_name}</TableCell>
          <TableCell sx={{ tableCellStyle }}>
            <IconButton>
              <SchoolIcon></SchoolIcon>
            </IconButton>
            <IconButton disabled={!userId}>
              <EditIcon></EditIcon>
            </IconButton>
            <IconButton disabled={!userId}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}



