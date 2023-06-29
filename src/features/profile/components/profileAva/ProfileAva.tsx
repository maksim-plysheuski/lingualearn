import React, { ChangeEvent, useState } from 'react'
import s from 'features/profile/components/ProfilePage.module.scss'
import { Avatar, Badge, IconButton } from '@mui/material'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined'
import { useAppSelector } from 'common/hooks'
import { convertFileToBase64 } from 'common/utils'

export const ProfileAva = () => {
  const profile = useAppSelector(state => state.profile.profile)

  const [ava, setAva] = useState('')
  const [isAvaBroken, setIsAvaBroken] = useState(false)

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    debugger
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          setAva('11')
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
      <Badge
        overlap={'circular'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <IconButton
            component={'label'}
            disableRipple={true}
            sx={{ width: '30px', height: '30px', border: '1px solid #fff', bgcolor: '#808080' }}
          >
            <LocalSeeOutlinedIcon sx={{ fontSize: '16px', color: '#FFF' }} />
            <input
              type={'file'}
              hidden
              accept='image/*'
              onChange={uploadHandler}
            />
          </IconButton>
        }
      >
        <Avatar
          onError={errorHandler}
          alt='user avatar'
          src={ava}
          sx={{ width: '96px', height: '96px' }}
        />
      </Badge>
    </div>
  )
}

