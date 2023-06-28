import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { EditPackModal } from 'features/pack/modal/editPackModal/EditCardModal'
import { TPack } from 'features/pack/packApi'

type Props = {
  pack: TPack
}

export const iconStyle = {
  color: 'white',
  ":disabled": {
    color: '#323232'
  }}


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
                      sx={iconStyle}>
            <EditPackModal  pack={props.pack}/>
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}