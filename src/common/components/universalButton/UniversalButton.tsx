import { Button, CircularProgress } from '@mui/material'
import React, { ReactNode } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { useAppSelector } from 'common/hooks'

type PropsType = {
  title: string
  onClickCallback?: () => void
  textColor?: string
  disabled?: boolean
  width?: string
  height?: string
  fontSize?: string
  squared?: boolean
  marginTop?: string
  type?: 'button'
  buttonStyle?: 'primary' | 'error'
  icon?: ReactNode
}

export const UniversalButton: React.FC<PropsType> = (
  {
    title,
    squared,
    textColor,
    onClickCallback,
    width,
    height,
    marginTop,
    type,
    fontSize,
    disabled,
    buttonStyle,
    icon
  }
) => {

  const isLoading = useAppSelector(state => state.app.isLoading)

  const btnStyle = {
    width: width ? `${width}px` : '347px',
    height: height ? `${height}px` : '36px',
    backgroundColor: textColor === 'black' ? '#FCFCFC' : '#366EFF',
    color: textColor ? textColor : '#FFFFFF',
    marginTop: marginTop ? marginTop : '0px',
    borderRadius: squared ? '2px' : '30px',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: fontSize ? fontSize : '16px',
    lineHeight: '20px',
    boxShadow:
      '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.5)'
  }

  return (
    <>
      {isLoading ? <LoadingButton sx={btnStyle}
                                  disabled={true}
                                  loading
                                  variant={'text'}
                                  loadingIndicator={
                                    <CircularProgress variant={'indeterminate'}
                                                      color='inherit' size={22} />} />
        : <Button sx={btnStyle}
                  disabled={disabled ? disabled : false}
                  onClick={onClickCallback}
                  variant={textColor ? 'text' : 'contained'}
                  type={type ? type : 'submit'}
                  startIcon={icon}
                  color={buttonStyle ? buttonStyle : 'primary'}
        >
          {title}
        </Button>}
    </>
  )
}