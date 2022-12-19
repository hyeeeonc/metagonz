import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  left 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  background: rgba(255, 255, 255, 0.3);

  z-index: 10;
`

const ModalContentContainer = styled.main`
  width: 800px;
  height: 600px;
  overflow-y: scroll;

  background: #ffffff;
  box-shadow: 0px 50px 150px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

type ModalProps = {
  children: React.ReactNode
  modalOpen: boolean
}

const Modal = ({ children, modalOpen }: ModalProps) => {
  return (
    <ModalBlock
      style={{
        display: modalOpen ? 'flex' : 'none',
      }}
    >
      <ModalContentContainer>{children}</ModalContentContainer>
    </ModalBlock>
  )
}

export default Modal
