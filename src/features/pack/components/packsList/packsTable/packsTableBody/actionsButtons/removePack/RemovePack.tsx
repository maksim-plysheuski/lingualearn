import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { RemovePackModal } from 'features/pack/modal/removePackModal/removePackModal'
import {
  iconStyle
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/editPack/EditPack'


export const RemovePack = () => {
  const userId = useAppSelector(state => state.packs.packParams.user_id)

  return (
    <>
      <Tooltip title={userId ? 'Delete' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
          <span>
        <IconButton disabled={!userId}
                    sx={iconStyle}>
            <RemovePackModal />
        </IconButton>
          </span>
      </Tooltip>
    </>
  )
}