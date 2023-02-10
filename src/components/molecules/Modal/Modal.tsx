import React, { useEffect } from 'react'
import { Icon } from '../../atoms/Icon';
import { ModalProps } from '../MobileMenu';
import styles from './Modal.module.scss';

export interface ModalOpenProps extends ModalProps {
  openModal: () => void;
}

const Modal = ({ modal, openModal }: ModalOpenProps) => {
  useEffect(() => {
    console.log(openModal)
    modal 
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  },[modal])
  return (
    <section className={modal ? `${styles.modal} ${styles.open}` : styles.modal}>
      <div className={styles.background}>
      </div>
      <div className={styles.whiteground}>
        <button className={styles.btn__close} onClick={()=>openModal()}>
          <Icon icon='CLOSE' />
        </button>
      </div>
    </section>
  )
}

export { Modal }