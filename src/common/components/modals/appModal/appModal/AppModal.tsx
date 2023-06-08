import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { FC, ReactNode } from 'react'
import s from 'common/components/modals/appModal/appModal/style.module.scss'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 395,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: 'none'
}

type PropsType = {
  children: ReactNode,
  title: string,
  isOpen: boolean,
  handleClose: () => void
}

export const AppModal: FC<PropsType> = ({ children, isOpen, handleClose, title }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <div className={s.modalHeader}>
          <span>{title}</span>
          <IconButton className={s.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <hr className={s.line} />
        {children}
      </Box>
    </Modal>
  )
}