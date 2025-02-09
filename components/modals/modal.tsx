import { ReactNode } from 'react'

const closeModals = () => {
  const modals = document.querySelectorAll('.modal') || []
  modals.forEach((modal) => {
    modal.classList.remove('is-active')
  })
}

export enum ModalIds {
  AssetsList = 'assets-list-modal',
  Trade = 'trade-modal',
}

interface ModalProps {
  children: ReactNode
  id: string
  reset?: () => void
}

const Modal = ({ children, id, reset }: ModalProps) => {
  const handleClick = () => {
    if (reset) reset()
    closeModals()
  }
  return (
    <div className="modal" id={id}>
      <div onClick={handleClick} className="modal-background" />
      <div className="modal-content box has-background-black">
        <div style={{ minHeight: '25rem' }}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
