import { IconButton, TextField } from '@mui/material'
import { FC, useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { useAppDispatch } from 'common/hooks'
import s from './style.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { userNameSchema } from 'features/auth/components/profile/validateShema/userNameSchema'
import { editNameIconSx, inputStyle } from 'common/components/editableTitle/style'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { authThunks } from 'features/auth'

type Props = {
  userName: string | undefined
}

type InputType = yup.InferType<typeof userNameSchema>

export const EditableTitle: FC<Props> = ({ userName }) => {
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<InputType>({
    mode: 'onTouched',
    resolver: yupResolver(userNameSchema)
  })

  const onEditMode = () => setEditMode(true)

  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {
    dispatch(authThunks.updateUserProfile({ name: data.userName }))
    setEditMode(false)
  }

  const isButtonDisabled = getFieldState('userName').invalid

  return (
    <>
      {!editMode
        ? <div className={s.spanContainer}>
          <span onDoubleClick={onEditMode}>{userName}</span>
          <IconButton onClick={onEditMode}><BorderColorOutlinedIcon sx={editNameIconSx} /></IconButton>
        </div>
        : <form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField autoFocus
                     type={'text'}
                     label={'Nickname'}
                     sx={{ ...inputStyle, marginTop: '36px' }}
                     defaultValue={userName}
                     autoComplete='off'
                     {...register('userName')}
                     error={!!errors.userName?.message}
                     helperText={errors.userName?.message}
                     InputProps={{
                       endAdornment: (
                         <SuperButton title={'SAVE'}
                                      width={'52px'}
                                      fontSize={'12px'}
                                      disabled={isButtonDisabled}
                         />)
                     }} />
        </form>
      }
    </>
  )
}