import { TableCell, Zoom } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import * as React from 'react'
import { modalsAction } from 'features/modals/modals.slice'
import { TPack } from 'features/pack/packApi'

type PropsType = {
  pack: TPack
  itemId: string
  itemName: string
}

export const ActionsButtons = (props: PropsType) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.packs.packParams.user_id)

  const learnPackHandler = () => console.log('need to fix')
  const updatePackHandler = () => dispatch(modalsAction.showUpdateModal(props.pack))
  const deletePackHandler = () => dispatch(modalsAction.showDeleteModal(props.pack))

  const iconStyle = {color: 'white', ":disabled": {
      color: '#323232'
    }}

  return (
    <TableCell sx={{backgroundColor: 'black', borderColor: '#333333', borderBottom: '1px solid #333333'}}>
      <Tooltip title={props.pack.cardsCount === 0 ? "" : 'Learn'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={props.pack.cardsCount === 0}
                      sx={iconStyle}
                      onClick={learnPackHandler}>
          <SchoolIcon />
        </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={userId ? 'Edit' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId}
                      sx={iconStyle}
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
                    sx={iconStyle}
                    onClick={deletePackHandler}>
            <DeleteIcon />
        </IconButton>
          </span>
      </Tooltip>
    </TableCell>
  )
}