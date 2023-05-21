import { TableBody, TableCell, TableRow, TableSortLabel, Box } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { visuallyHidden } from '@mui/utils';

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
          <TableCell sx={{ tableCellStyle }}>
          {/*  <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {card.cardsCount}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>*/}
          </TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.updated}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.user_name}</TableCell>
          <TableCell sx={{ tableCellStyle }}>"need to fix"</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}



