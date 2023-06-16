import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ReactNode, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import s from './style.module.scss'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 396,
  bgcolor: '#FFFFFF',
  pt: 2,
  px: 4,
  pb: 3
}

type Props = {
  children: ReactNode
  buttonChildren: ReactNode
  title: string
}
export const BaseModal = (props: Props) => {
  const { children, buttonChildren, title } = props

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div onClick={handleOpen}>
        {buttonChildren}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, paddingTop: '0px', paddingLeft: '24px', paddingRight: '24px' }}>
          <div className={s.titleContainer}>
            <span>{title}</span>
            <div onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  )
}

