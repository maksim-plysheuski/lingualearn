import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import s from './style.module.scss'


export const CountSearch = () => {
  const [value, setValue] = React.useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <div className={s.container}>
      <span>Number of cards</span>
      <div className={s.countContainer}>
        <span className={s.count}>{value[0]}</span>
        <Box sx={{
          width: '155px',
          marginLeft: '12px',
          marginRight: '12px'
        }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
          />
        </Box>
        <span className={s.count}>{value[1]}</span>
      </div>

    </div>

  )
}

