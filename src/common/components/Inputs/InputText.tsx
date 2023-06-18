import * as React from 'react';
import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC } from 'react'

const CustomInput = styled(TextField)({
  '& label.Mui-focused': {
    color: '#808080',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8C61FF',
    },
  },
});


type Props = {
  label: string
  value: string
  setValue: (value: string) => void
}


export const InputText: FC<Props> = ({label, value,setValue}) => {

  const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <CustomInput label={label}
                 id="custom-input"
                 value={value}
                 onChange={setValueHandler}
    />
  );
}