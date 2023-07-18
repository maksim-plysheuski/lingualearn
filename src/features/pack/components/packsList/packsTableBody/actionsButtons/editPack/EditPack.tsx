import IconButton from '@mui/material/IconButton'
import { Zoom } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import Tooltip from '@mui/material/Tooltip'
import { EditPackModal } from 'features/pack/modal/editPackModal/EditCardModal'
import { CardPacksT } from 'features/pack/service/packSlice.type'
import { userIdSelect } from 'features/profile'

type Props = {
  pack: CardPacksT
}

export const iconStyle = {
  color: 'white',
  ':disabled': {
    color: '#333333'
  },
  '&:hover': {
    color: '#e66300',
    transition: '300ms ease-in-out',
  }
}


export const EditPack = (props: Props) => {
  const userId = useAppSelector(userIdSelect)

  return (
    <>
      <Tooltip title={userId ? 'Edit' : false} arrow placement='top' TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={!userId} sx={iconStyle}>
            <EditPackModal pack={props.pack} />
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}