import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField/TextField'

type Props = {
  label: string
  value: string
  setValue: (value: string) => void
}

export const InputCastom = (props: Props) => {
  const { label, value, setValue } = props
  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <TextField
        sx={{
          width: '1',
          marginTop: '24px'
        }}
        label={label}
        variant='standard'
        value={value}
        onChange={setValueHandler}
      />
    </>
  )
}

