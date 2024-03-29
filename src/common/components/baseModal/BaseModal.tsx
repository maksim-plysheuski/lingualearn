import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import React, { memo, ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import s from './style.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { baseModalSx } from 'common/components/baseModal/style'

type Props = {
  children: ReactNode
  buttonOpen: ReactNode
  title: string
  open: boolean
  titleButtonAction: string
  setOpen: (open: boolean) => void
  actionCallback: () => void
  isButtonDisabled: boolean
}

export const BaseModal = memo((props: Props) => {
  const { children, buttonOpen, title, open, setOpen, actionCallback, titleButtonAction, isButtonDisabled } = props

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div onClick={handleOpen}>{buttonOpen}</div>
      <Modal open={open}
             onClose={handleClose}
             aria-labelledby='parent-modal-title'
             aria-describedby='parent-modal-description'
      >
        <Box sx={baseModalSx}>
          <div className={s.titleContainer}>
            <span>{title}</span>
            <CloseIcon sx={{ cursor: 'pointer', '&:hover': { color: '#808080' } }} onClick={handleClose} />
          </div>
          <div className={s.containerChildren}>{children}</div>
          <div className={s.buttonContainer}>
            <SuperButton title={'Cancel'} onClick={handleClose} isGrayColor={true} width={'100'} />
            <SuperButton title={titleButtonAction} onClick={actionCallback} width={'148'} disabled={isButtonDisabled} />
          </div>
        </Box>
      </Modal>
    </>
  )
})

