import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { EditPackModal } from 'features/pack/components/modal/editPackModal/EditPackModal'
import { tableIconSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { selectUserId } from 'features/profile/selectors/selectors'
import { TPack } from 'features/pack/service/packsTypes'

type Props = {
  pack: TPack
}

export const EditPack = (props: Props) => {
  const userId = useAppSelector(selectUserId)

  return(
    <>
      <Tooltip title={userId ? 'Edit pack' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId}
                      sx={tableIconSx}>
            <EditPackModal pack={props.pack} />
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}