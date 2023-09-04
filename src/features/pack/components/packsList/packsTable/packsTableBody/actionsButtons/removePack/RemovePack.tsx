import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { RemovePackModal } from 'features/pack/components/modal/removePackModal/removePackModal'
import { FC } from 'react'
import { tableIconSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { selectUserId } from 'features/profile/selectors/selectors'


type Props = {
  packId: string
  packName: string
  packUserId?: string
}

export const RemovePack: FC<Props> = ({packId, packName, packUserId}) => {
  const profileUserId = useAppSelector(selectUserId)

  return (
    <>
      <Tooltip title={profileUserId ? 'Delete pack' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
          <span>
        <IconButton disabled={packUserId !== profileUserId}
                    sx={tableIconSx}>
            <RemovePackModal packName={packName!} packId={packId} />
        </IconButton>
          </span>
      </Tooltip>
    </>
  )
}