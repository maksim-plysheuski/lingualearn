import { Button, CircularProgress } from '@mui/material'
import React, { ReactNode } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { useAppSelector } from 'common/hooks'

type PropsType = {
  title: string
  onClickCallback?: () => void
  disabled?: boolean
  width?: string
  height?: string
  fontSize?: string
  marginTop?: string
  type?: 'button'
  icon?: ReactNode
}

export const UniversalButton: React.FC<PropsType> = (
  {
    title,
    onClickCallback,
    width,
    height,
    marginTop,
    type,
    fontSize,
    disabled,
    icon
  }
) => {

  const isLoading = useAppSelector(state => state.app.isLoading)

  const btnStyle = {
    width: width ? `${width}px` : '347px',
    height: height ? `${height}px` : '36px',
    backgroundColor: disabled ? 'rgba(56, 39, 102, 1)' : '#8C61FF',
    color: '#FFFFFF',
    marginTop: marginTop ? marginTop : '0px',
    borderRadius: '4px',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: fontSize ? fontSize : '14px',
    lineHeight: '20px',
    boxShadow: '0px 2px 10px rgba(109, 109, 109, 0.25), ' +
      'inset 0px 1px 0px rgba(255, 255, 255, 0.5)',
    '&:hover': {
      backgroundColor: 'rgb(114,80,210)'
    }
  }

  return (
    <>
      {isLoading ? <LoadingButton sx={{ ...btnStyle, backgroundColor: 'rgba(56, 39, 102, 1)' }}
                                  disabled={true}
                                  loading
                                  variant={'text'}
                                  loadingIndicator={
                                    <CircularProgress variant={'indeterminate'}
                                                      color='inherit' size={22} />} />
        : <Button sx={btnStyle}
                  disabled={disabled ? disabled : false}
                  onClick={onClickCallback}
                  variant={disabled ? 'text' : 'contained'}
                  type={type ? type : 'submit'}
                  startIcon={icon}
        >
          {title}
        </Button>}
    </>
  )
}