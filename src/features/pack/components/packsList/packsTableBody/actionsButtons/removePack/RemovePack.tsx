import IconButton from '@mui/material/IconButton'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { RemovePackModal } from 'features/pack/modal/removePackModal/removePackModal'
import { iconStyle } from 'features/pack/components/packsList/packsTableBody/actionsButtons/editPack/EditPack'
import { FC } from 'react'
import { userIdSelect } from 'features/profile'


type Props = {
  packName?: string
  packId: string
}

export const RemovePack: FC<Props> = ({ packName, packId }) => {
  const userId = useAppSelector(userIdSelect)

  return (
    <>
      <Tooltip title={userId ? 'Delete' : false} arrow placement='top' TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId} sx={iconStyle}>
            <RemovePackModal packName={packName} packId={packId} />
          </IconButton>
        </span>
      </Tooltip>
    </>
  )
}