import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { EditPackModal } from 'features/pack/components/modal/editPackModal/EditPackModal'
import { TPack } from 'features/pack/packApi'
import { tableActionsStyle } from 'common/style/tableStyle'

type Props = {
  pack: TPack
}

export const EditPack = (props: Props) => {
  const userId = useAppSelector(state => state.packs.packParams.user_id)

  return(
    <>
      <Tooltip title={userId ? 'Edit' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId}
                      sx={tableActionsStyle}>
            <EditPackModal pack={props.pack} />
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}