import React, { ChangeEvent, useState } from 'react'
import { Avatar, Badge, IconButton } from '@mui/material'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { convertFileToBase64 } from 'common/utils'
import defAva from 'features/auth/components/profile/img/defAva.png'
import { AvatarSx, IconButtonSx, iconSx } from 'features/auth/components/profile/profileAva/style'
import { toast } from 'react-toastify'
import { selectUserAva } from 'features/auth/selectors'
import { authThunks } from 'features/auth/index'

export const ProfileAva = () => {
  const dispatch = useAppDispatch()
  const avatar = useAppSelector(selectUserAva)
  const [ava, setAva] = useState(avatar)
  const [isAvaBroken, setIsAvaBroken] = useState(false)


  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          dispatch(authThunks.updateUserProfile({ avatar: file64 }))
            .unwrap()
            .then(res => setAva(res.updatedUser.avatar))
            .catch(() => toast.error('Image size is too large'))
        })
      } else {
        toast.error('Image size is too large')
      }
    }
  }

  const errorHandler = () => {
    setIsAvaBroken(true)
    toast.error('Invalid image')
  }

  return (
      <Badge overlap={'circular'}
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             badgeContent={
               <IconButton component={'label'} disableRipple={true} sx={IconButtonSx}>
                 <PhotoCameraOutlinedIcon sx={iconSx} />
                 <input type={'file'} hidden accept='image/*' onChange={uploadHandler} />
               </IconButton>}>
        <Avatar onError={errorHandler} alt='user avatar' src={isAvaBroken ? defAva : ava} sx={AvatarSx} />
      </Badge>
  )
}

