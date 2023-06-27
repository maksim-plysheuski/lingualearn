import * as React from 'react'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FC } from 'react'

export const inputStyle = {
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
  marginTop: '3px',
  input: {
    width: '100%',
    height: '36px',
    color: 'white',
    padding: '0',
    margin: '0 12px 0 12px'
  }
}


type Props = {
  label?: string
  value?: string
  setValue?: (value: string) => void
}


export const InputText: FC<Props> = ({ value, setValue }) => {
  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(e.currentTarget.value)
  }

  return (
    <>
      <TextField id='custom-input'
                 value={value}
                 sx={inputStyle}
                 defaultValue={value}
                 onChange={setValueHandler}
      />
    </>

  )
}