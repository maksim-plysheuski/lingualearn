import { IconButton, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { UniversalButton } from 'common/components/button/UniversalButton'
import { profileThunks } from 'features/profile/profile.slice'
import { useAppDispatch } from 'common/hooks'
import s from './style.module.scss'

type EditableTitlePropsType = {
  userName: string
}

export const EditableTitle = (props: EditableTitlePropsType) => {
  const dispatch = useAppDispatch()

  const [newUserName, setNewUserName] = useState<string>(props.userName)
  const [editMode, setEditMode] = useState<boolean>(false)


  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.currentTarget.value)
  }

  const onEditMode = () => setEditMode(true)

  const onSaveClickHandler = () => {
    dispatch(profileThunks.changeUserData({ name: newUserName }))
    setEditMode(false)
  }

  const onBlurHandler = () => {
    setEditMode(false)
    dispatch(profileThunks.changeUserData({ name: newUserName }))
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
        <TextField type={'text'}
                   label={'Nickname'}
                   variant={'standard'}
                   sx={{ marginTop: '24px' }}
                   defaultValue={props.userName}
                   onChange={onChangeInputHandler}
                   onBlur={onBlurHandler}
                   className={s.inputUserName}
                   autoFocus
                   InputProps={{
                     endAdornment: (
                       <UniversalButton title={'SAVE'}
                                        width={'52px'}
                                        fontSize={'12px'}
                                        squared={true}
                                        onClickCallback={onSaveClickHandler} />)
                   }} />

      }
    </>
  )
}