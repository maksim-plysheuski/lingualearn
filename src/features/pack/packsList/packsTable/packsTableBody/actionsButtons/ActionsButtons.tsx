import { TableCell, Zoom } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import Tooltip from '@mui/material/Tooltip'

export const ActionsButtons = (props: { packId: string }) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.packs.packParams.user_id)

  const handleLearn = () => {
    console.log('need to fix')
  }

  const handleEdit = () => {
    console.log('need to fix')
  }

  const handleDelete = () => {
    dispatch(packsThunks.deletePack({ id: props.packId }))
  }

  return (
    <TableCell>
      <Tooltip title={'Learn'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <IconButton onClick={handleLearn}>
          <SchoolIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={userId ? 'Edit' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId}
                      onClick={handleEdit}>
            <EditIcon />
        </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={userId ? 'Delete' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
          <span>
        <IconButton disabled={!userId}
                    onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
          </span>
      </Tooltip>
    </TableCell>
  )
}