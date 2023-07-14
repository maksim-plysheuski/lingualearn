import React, { ChangeEvent } from 'react'
import s from 'features/profile/components/profile/components/ProfilePage.module.scss'
import { Avatar, Badge, IconButton } from '@mui/material'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { convertFileToBase64 } from 'common/utils'
import defAva from 'features/profile/components/profile/components/imegs/defAva.png'
import { AvatarSx, IconButtonSx, iconSx } from './style'
import { toast } from 'react-toastify'
import { authThunks } from 'features/profile/profile.slice'
import { userAvatarSelect } from 'features/profile/select/profile.select'

export const ProfileAva = () => {
  const dispatch = useAppDispatch()
  const userAvatar = useAppSelector(userAvatarSelect)

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          dispatch(authThunks.changeProfile({ avatar: file64 })).unwrap()
            .then(res => toast.success('lj,fktyf'))
            .catch(err => toast.error('пошел на хуй шкутник'))
        })
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    }
  }

  const errorHandler = () => alert('Кривая картинка')

  return (
    <div className={s.userPhotoContainer}>
      <Badge overlap={'circular'}
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             badgeContent={
               <IconButton component={'label'} disableRipple={true} sx={IconButtonSx}>
                 <PhotoCameraOutlinedIcon sx={iconSx} />
                 <input type={'file'} hidden accept='image/*' onChange={uploadHandler} />
               </IconButton>}>
        <Avatar onError={errorHandler} alt='user avatar' src={userAvatar || defAva} sx={AvatarSx} />
      </Badge>
    </div>
  )
}

