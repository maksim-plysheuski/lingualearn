import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import React, { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import s from './style.module.scss'
import { SxProps, Theme } from '@mui/material/styles'

const style: SxProps<Theme> = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 542,
  color: '#FFFFFF',
  bgcolor: '#171717',
  border: '1px solid #333333',
  borderRadius: '2px 2px 0px 0px',
  pt: 2,
  px: 4,
  pb: 3,
  padding: '0px'
}

type Props = {
  children: ReactNode
  buttonOpen: ReactNode
  title: string
  open: boolean
  setOpen: (open: boolean) => void
  actionCallback: () => void
}
export const BaseModalCard = (props: Props) => {
  const { children, buttonOpen, title, open, setOpen, actionCallback } = props

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {buttonOpen}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={style}>
          <div className={s.titleContainer}>
            <span>{title}</span>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
          </div>
          <div className={s.containerChildren}>
            {children}
          </div>
          <div className={s.buttonContainer}>
            <button className={s.buttonCancle} onClick={handleClose}>Cancel</button>
            <button className={s.buttonAction} onClick={actionCallback}>Add New Pack</button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

