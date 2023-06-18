import { IconButton, TextField } from '@mui/material'
import { useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { profileThunks } from 'features/profile/profile.slice'
import { useAppDispatch } from 'common/hooks'
import s from './style.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { userNameSchema } from 'features/profile/userNameSchema'

type EditableTitlePropsType = {
  userName: string
}

type InputType = yup.InferType<typeof userNameSchema>

export const EditableTitle = (props: EditableTitlePropsType) => {
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors } } = useForm<InputType>({
    mode: 'onBlur',
    resolver: yupResolver(userNameSchema)
  })


  const onEditMode = () => setEditMode(true)


  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {
    dispatch(profileThunks.changeUserData({ name: data.userName }))
    setEditMode(false)
  }

  return (
    <>
      {!editMode ?
        <span className={s.spanUserName} onDoubleClick={onEditMode}>
          {props.userName}
          <IconButton onClick={onEditMode}>
            <BorderColorOutlinedIcon sx={{ fontSize: '20px' }} />
          </IconButton>
        </span>
        :
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField autoFocus
                     type={'text'}
                     label={'Nickname'}
                     variant={'standard'}
                     sx={{ marginTop: '25px' }}
                     className={s.inputUserName}
                     defaultValue={props.userName}
                     {...register('userName')}
                     error={!!errors.userName?.message}
                     helperText={errors.userName?.message}
                     InputProps={{
                       endAdornment: (
                         <UniversalButton title={'SAVE'}
                                          width={'52px'}
                                          fontSize={'12px'}
                                          disabled={!!errors.userName?.message}
                         />)
                     }} />
        </form>

      }
    </>
  )
}