import { IconButton, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { UniversalButton } from 'common/components/button/UniversalButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { profileThunks } from 'features/profile/profile.slice'
import { useAppDispatch } from 'common/hooks'

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
      {!editMode ? (
        <Typography
          component={'span'}
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            lineHeight: '24px'
          }}
          onDoubleClick={onEditMode}
        >
          {props.userName}
          <IconButton onClick={onEditMode}>
            <BorderColorIcon sx={{ color: '#000', fontSize: '20px' }} />
          </IconButton>
        </Typography>
      ) : (
        <TextField type={'text'}
                   label={'Nickname'}
                   variant={'standard'}
                   helperText={'enter your name'}
                   defaultValue={props.userName}
                   onChange={onChangeInputHandler}
                   onBlur={onBlurHandler}
                   autoFocus
                   InputProps={{
                     endAdornment: (
                       <UniversalButton title={'SAVE'}
                                        onClickCallback={onSaveClickHandler}
                                        textColor={'white'}
                                        width={'52px'}
                                        fontSize={'12px'}
                       />
                     )
                   }}
        />

      )}
    </>
  )
}