import s from './styles.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'
import React, { ChangeEvent, FC } from 'react'
import { convertFileToBase64 } from 'common/utils'
import { toast } from 'react-toastify'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined'

type Props = {
  coverTitle?: string
  coverImage: string
  setCoverImage: (newCover: string) => void
}

export const ImageBlockModal: FC<Props> = ({ coverTitle, coverImage, setCoverImage }) => {

  const setCoverHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          setCoverImage(file64)
        })
      } else {
        toast.error('Image size is too large')
      }
    }
  }

  return (
    <>
      <div className={s.coverBlock}>
        {coverImage ?
          <>
            {coverTitle && <span className={s.titles}>{coverTitle}</span>}
            <img src={coverImage} alt='pack image' />
            <div className={s.buttonContainer}>
              <label style={{ width: '100%' }}>
                <SuperButton title={'Change Cover'}
                             marginTop={'24px'}
                             isGrayColor={true}
                             isSpan={true}
                             icon={<PhotoOutlinedIcon />}
                />
                <input type='file' accept='image/*' onChange={setCoverHandler} />
              </label>
              <SuperButton title={'Delete Cover'}
                           marginTop={'24px'}
                           marginLeft={'10px'}
                           isGrayColor={true}
                           onClick={() => setCoverImage('')}
                           icon={<DeleteOutlineIcon />}
              />
            </div>
          </>
          : <>
            {coverTitle && <span className={s.titles}>{coverTitle}</span>}
            <PanoramaOutlinedIcon sx={{ fontSize: '110px', marginTop: '19px', color: '#e66300' }} />
            <label className={s.buttonContainer}>
              <SuperButton title={'Change Cover'}
                           marginTop={'24px'}
                           isGrayColor={true}
                           isSpan={true}
                           icon={<PhotoOutlinedIcon />}

              />
              <input type='file' accept='image/*' onChange={setCoverHandler} />
            </label>
          </>
        }
      </div>
    </>
  )
}