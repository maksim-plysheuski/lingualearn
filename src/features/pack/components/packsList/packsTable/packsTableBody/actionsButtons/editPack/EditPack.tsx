import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { EditPackModal } from 'features/pack/components/modal/editPackModal/EditPackModal'
import { tableIconSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { FC } from 'react'
import { selectProfileUserId } from 'features/auth/selectors'

type PropsType = {
  packId: string
  packName: string
  coverImage: string
  isPrivate: boolean
}

export const EditPack: FC<PropsType> = ({packId, packName, coverImage, isPrivate}) => {
  const userId = useAppSelector(selectProfileUserId)

  return(
    <>
      <Tooltip title={userId ? 'Edit pack' : false}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId}
                      sx={tableIconSx}>
            <EditPackModal packId={packId}
                           packName={packName}
                           coverImage={coverImage}
                           isPrivate={isPrivate}
            />
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}