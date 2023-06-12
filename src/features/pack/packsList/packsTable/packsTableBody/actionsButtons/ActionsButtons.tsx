import { TableCell, Zoom } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import * as React from 'react'
import { modalsAction } from 'features/modals/modals.slice'

type PropsType = {
  pack: any
  itemId: string
  itemName: string
}

export const ActionsButtons = (props: PropsType) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.packs.packParams.user_id)

  const learnPackHandler = () => console.log('need to fix')
  const updatePackHandler = () => dispatch(modalsAction.showUpdateModal(props.pack))
  const deletePackHandler = () => dispatch(modalsAction.showDeleteModal(props.pack))

  return (
    <TableCell>
      <Tooltip title={'Learn'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <IconButton onClick={learnPackHandler}>
          <SchoolIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={userId ? 'Edit' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId}
                      onClick={updatePackHandler}>
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
                    onClick={deletePackHandler}>
            <DeleteIcon />
        </IconButton>
          </span>
      </Tooltip>
    </TableCell>
  )
}