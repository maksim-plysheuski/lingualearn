import { TableBody, TableCell, TableRow } from '@mui/material'
import { EditPack } from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/editPack/EditPack'
import {
  RemovePack
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/removePack/RemovePack'
import { useGetPacksQuery } from 'features/pack/service/pack.slice'
import {
  LearnPack
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/learnPack/LearnPack'

const tableCellStyle = {
  wordWrap: 'break-word',
  minWidth: '150px',
  maxWidth: '200px',
  color: 'white',
  borderBottom: '1px solid #333333'
}

export const PacksTableBody = () => {


  const { data: packs, isLoading } = useGetPacksQuery({})
  console.log(packs)
  const openSelectedPack = (packId: string) => {
  }
  if (isLoading) return <></>

  return (
    <TableBody>
      {packs.cardPacks?.map((pack: any) => (
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
            <LearnPack cardsCount={pack.cardsCount} packId={pack._id} />
            <EditPack pack={pack} />
            <RemovePack packName={pack.name} packId={pack._id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}