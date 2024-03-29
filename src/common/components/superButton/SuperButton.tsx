import { Button, CircularProgress } from '@mui/material'
import React, { memo, ReactNode } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

type Props = {
  title?: string
  type?: 'button'
  onClick?: () => void
  disabled?: boolean
  isLoading?: boolean
  isSpan?: boolean
  isGrayColor?: boolean
  width?: string
  height?: string
  fontSize?: string
  marginTop?: string
  marginLeft?: string
  icon?: ReactNode
}

export const SuperButton = memo((props: Props) => {
  const {
    title, onClick, type, width, height,
    fontSize, marginTop, marginLeft, isSpan,
    isGrayColor, isLoading, disabled, icon
  } = props

  const baseBntStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '36px',
    backgroundColor: isGrayColor ? '#4C4C4C' : '#8C61FF',
    color: disabled ? '#C3C1C7' : '#FFFFFF',
    marginTop: marginTop ? marginTop : '0px',
    marginLeft: marginLeft ? marginLeft : '0px',
    borderRadius: '4px',
    textTransform: 'none',
    fontWeight: '700',
    fontSize: fontSize ? fontSize : '14px',
    lineHeight: '24px',
    boxShadow: '0px 2px 10px rgba(109, 109, 109, 0.25), ' +
      'inset 0px 1px 0px rgba(255, 255, 255, 0.5)'
  }

  const primaryStyle = {
    ...baseBntStyle,
    '&:hover': {
      backgroundColor: disabled ? '#382766' : '#A280FF'
    },
    '&.Mui-disabled': {
      backgroundColor: '#382766',
      color: '#C3C1C7'
    }
  }

  const secondaryStyle = {
    ...baseBntStyle,
    '&:hover': {
      backgroundColor: disabled ? '#4C4C4C' : '#808080'
    },
    '&.Mui-disabled': {
      backgroundColor: '#4C4C4C'
    }
  }


  return (
    <>
      {isLoading ? <LoadingButton sx={baseBntStyle}
                                  loading
                                  loadingIndicator={
                                    <CircularProgress variant={'indeterminate'}
                                                      color='inherit' size={26} />} />
        : <Button sx={isGrayColor ? secondaryStyle : primaryStyle}
                  component={isSpan ? 'span' : 'button'}
                  disabled={disabled ? disabled : false}
                  onClick={onClick}
                  type={type ? type : 'submit'}
                  startIcon={icon}
        >
          {title}
        </Button>}
    </>
  )
})