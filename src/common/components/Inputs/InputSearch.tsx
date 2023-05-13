import React, { FC } from 'react'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Search from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField/TextField'

type  Props = {


}

export const InputSearch: FC<Props> = ({  ...restProps }) => {

  return (
    <>
        <TextField variant={'outlined'}
                   size={'small'}
                   focused
                   fullWidth
                   sx={{
                     height:'36px',
                     backgroundColor:'#fff',
                     opacity:'0.5',
                     color:'#D9D9D9',
                     border: '1px solid #D9D9D9',
                     '& .MuiOutlinedInput-notchedOutline':{
                       border:"none"
                     },
                     borderRadius:'2px',
                     fontSize:'14px',
                   }}
                   placeholder={'Provide your text'}
                   {...restProps}
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position='start'>
                         <Search sx={{height:'12px'}}/>
                       </InputAdornment>
                     )
                   }}
        />
    </>
  )
}
