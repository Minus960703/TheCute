import React, { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { modalSlice } from '../../../redux/modalReducer';
import { Icon } from '../../atoms/Icon';
import { ModalProps } from '../MobileMenu';
import styles from './Modal.module.scss';

export interface ModalOpenProps extends ModalProps {
  openModal: () => void;
}

const Modal = React.memo(({ openModal }: ModalOpenProps) => {
  const { active } = useSelector((state: any) => state.modal);
  console.log(active)
  useEffect(() => {
    active
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [active])
  const dispatch = useDispatch();
  return (
    <section className={active ? `${styles.modal} ${styles.open}` : styles.modal}>
      <div className={styles.background}>
      </div>
      <div className={styles.whiteground}>
        <button className={styles.btn__close} onClick={() => dispatch(modalSlice.actions.open())}>
          <Icon icon='CLOSE' />
        </button>
      </div>
    </section>
  )
});

export { Modal }