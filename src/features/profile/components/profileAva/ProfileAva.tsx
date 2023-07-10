import React, { ChangeEvent, useState } from 'react'
import s from 'features/profile/components/ProfilePage.module.scss'
import { Avatar, Badge, IconButton } from '@mui/material'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { convertFileToBase64 } from 'common/utils'
import defAva from 'features/profile/components/imegs/defAva.png'
import { AvatarSx, IconButtonSx, iconSx } from 'features/profile/components/profileAva/style'
import { profileThunks } from 'features/profile/profile.slice'
import { toast } from 'react-toastify'

export const ProfileAva = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.profile.profile)
  const [ava, setAva] = useState(profile?.avatar)
  const [isAvaBroken, setIsAvaBroken] = useState(false)


  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          dispatch(profileThunks.changeUserProfile({ avatar: file64 }))
            .unwrap()
            .then(res => setAva(res.avatar))
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
    <div className={s.userPhotoContainer}>
      <Badge overlap={'circular'}
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             badgeContent={
               <IconButton component={'label'} disableRipple={true} sx={IconButtonSx}>
                 <PhotoCameraOutlinedIcon sx={iconSx} />
                 <input type={'file'} hidden accept='image/*' onChange={uploadHandler} />
               </IconButton>}>
        <Avatar onError={errorHandler} alt='user avatar' src={isAvaBroken ? defAva : ava} sx={AvatarSx} />
      </Badge>
    </div>
  )
}

