import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modalSlice } from '../../../redux/modalReducer';
import { Icon } from '../../atoms/Icon';
import styles from './Modal.module.scss';
import Guide from 'public/guide.png';
import Image from 'next/image';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import { ModalStateType, RootState } from '../../../types/ReducerStateType';

const Modal = () => {
  const { active, content, type } = useSelector((state: RootState<ModalStateType>) => state.modal);
  const { name, file, birth, age, gender, point }: any = content;
  useEffect(() => {
    active
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [active, content, type, point])
  const dispatch = useDispatch();
  return (
    <section className={active ? `${styles.modal} ${styles.open}` : styles.modal}>
      <div className={styles.background}></div>
      <div className={styles.whiteground}>
        <button className={styles.btn__close} onClick={() => dispatch(modalSlice.actions.close())}>
          <Icon icon='CLOSE' />
        </button>
        <div className={styles.guide__area}>
          {type === 'guide'
            ? <Image src={Guide} layout="fill" alt="guide" priority />
            : content
            && <div style={{ height: '100%' }}>
                <AnimalImage name={name} file={file} birth={birth} age={age} gender={gender} />
                <div className={styles.point}>
                  {point.map((current: string) => <p key={current}>{current}</p>)}
                </div>
                <Title title='대표사진' />
                <div className={styles.photo__area}>
                  {file.map((photo: string) => <div className={styles.photo__item}><Image src={photo} layout='fill' alt='photo' priority/></div>)}
                </div>
              </div>
          }
        </div>
      </div>
    </section>
  )
};

export { Modal };

