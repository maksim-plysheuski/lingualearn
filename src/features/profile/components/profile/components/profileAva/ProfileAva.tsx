import React, { ChangeEvent, useState } from 'react'
import s from 'features/profile/components/profile/components/ProfilePage.module.scss'
import { Avatar, Badge, IconButton } from '@mui/material'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { convertFileToBase64 } from 'common/utils'
import defAva from 'features/profile/components/profile/components/imegs/defAva.png'
import { AvatarSx, IconButtonSx } from 'features/profile/components/profile/components/profileAva/style'
import { toast } from 'react-toastify'
import { authThunks } from 'features/profile/profile.slice'

export const ProfileAva = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.authProfile.profile)

  const [ava, setAva] = useState(profile.avatar)
  const [isAvaBroken, setIsAvaBroken] = useState(false)


  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          dispatch(authThunks.changeProfile({ avatar: file64 }))
            .unwrap()
            .then(res => toast.success('lj,fktyf'))
            .catch(err => toast.error('пошел на хуй шкутник'))
        })
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    }
  }

  const errorHandler = () => {
    setIsAvaBroken(true)
    alert('Кривая картинка')
  }

  return (
    <div className={s.userPhotoContainer}>
      <Badge overlap={'circular'}
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             badgeContent={
               <IconButton component={'label'} disableRipple={true} sx={IconButtonSx}>
                 <LocalSeeOutlinedIcon sx={{ fontSize: '16px', color: '#FFF' }} />
                 <input type={'file'} hidden accept='image/*' onChange={uploadHandler} />
               </IconButton>
             }
      >
        <Avatar onError={errorHandler} alt='user avatar' src={isAvaBroken ? defAva : ava} sx={AvatarSx} />
      </Badge>
    </div>
  )
}

