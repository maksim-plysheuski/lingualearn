export const inputStyle = {
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
      borderColor: '#808080',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #ffffff'
    },
    '&.MuiFormLabel-filled' : {
      backgroundColor: 'red'
    },
  },
  width: 348,
  height: 36,
  input: {
    color: 'white',
  },
}

export const editNameIconSx = { fontSize: '20px', color: 'white', '&:hover': {color: '#808080'} }