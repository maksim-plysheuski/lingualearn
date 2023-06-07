import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC, ReactNode } from 'react'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 395,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


type PropsType = {
  children: ReactNode,
  isModalOpen: boolean,
  handleOpen: () => void
  handleClose: () => void
}



export const BasicModal: FC<PropsType> = ({children, isModalOpen, handleOpen, handleClose}) => {



  return (
    <div>
      <UniversalButton title={'Add new pack'} onClickCallback={handleOpen} width={"175"}/>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}