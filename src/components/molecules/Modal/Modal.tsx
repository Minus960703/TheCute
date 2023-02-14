import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { modalSlice } from '../../../redux/modalReducer';
import { Icon } from '../../atoms/Icon';
import styles from './Modal.module.scss';

const Modal = () => {
  const { active } = useSelector((state: any) => state.modal);
  useEffect(() => {
    active
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [active])
  console.log(active)
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
};

export { Modal };