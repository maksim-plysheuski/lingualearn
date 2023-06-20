import * as React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FC } from 'react'

export const CustomInput = styled(TextField)({
  '& label.Mui-focused': {
    color: '#808080;'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#4C4C4C'
    },
    '&:hover fieldset': {
      borderColor: '#5d5d5d'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4C4C4C'
    }
  },
  width: '100%',
  height: '36px',
  input: {
    color: 'white'
  }
})


type Props = {
  label: string
  value: string
  setValue: (value: string) => void
}


export const InputText: FC<Props> = ({ label, value, setValue }) => {
  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <CustomInput label={label}
                   id='custom-input'
                   value={value}
                   onChange={setValueHandler}
      />
    </>

  )
}