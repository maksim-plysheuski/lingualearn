import { IconButton, TextField } from '@mui/material'
import { useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { profileThunks } from 'features/profile/profile.slice'
import { useAppDispatch } from 'common/hooks'
import s from './style.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { userNameSchema } from 'features/profile/components/userNameSchema'

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

  const inputStyle = {
    '& .MuiFormLabel-root': {
      color: '#808080'
    },
    '& label.Mui-focused': {
      color: '#808080;',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4C4C4C',
      },
      '&:hover fieldset': {
        borderColor: '#5d5d5d',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4C4C4C',
      },
      '&.MuiFormLabel-filled' : {
        backgroundColor: 'red'
      },
    },
    width: '100%',
    height: '36px',
    input: {
      color: 'white',
    },
  }

  const onEditMode = () => setEditMode(true)


  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {
    dispatch(profileThunks.changeUserProfile({ name: data.userName }))
    setEditMode(false)
  }

  return (
    <>
      {!editMode ?
        <span className={s.spanUserName} onDoubleClick={onEditMode}>
          {props.userName}
          <IconButton onClick={onEditMode}>
            <BorderColorOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
          </IconButton>
        </span>
        :
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField autoFocus
                     type={'text'}
                     label={'Nickname'}
                     sx={{...inputStyle, marginTop: '36px'}}
                     className={s.inputUserName}
                     defaultValue={props.userName}
                     {...register('userName')}
                     error={!!errors.userName?.message}
                     helperText={errors.userName?.message}
                     InputProps={{
                       endAdornment: (
                         <SuperButton title={'SAVE'}
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