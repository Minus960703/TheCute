import React, { useCallback, useEffect, useState } from 'react'
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
  const [ photoNumber, setPhotoNumber] = useState(1);
  useEffect(() => {
    active
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [active, content, type, point])
  const dispatch = useDispatch();
  const isMoveNextPhoto = useCallback(() => {
    setPhotoNumber((prev) => prev + 1);
    const photoCard = document.querySelector(`.${styles.photo__area}`);
    const photoArea = photoCard && photoCard?.clientWidth * file.length;

    console.log(photoCard?.clientWidth);
    console.log(photoArea);
    // console.log(document.querySelector(styles.photo__area)?.clientWidth);
  }, [])
  const isMovePrevPhoto = useCallback(() => {
    setPhotoNumber((prev) => prev - 1);
  }, [])
  const isCloseModalPopup = useCallback(() => {
    dispatch(modalSlice.actions.close());
    setPhotoNumber(1);
  }, [])
  return (
    <section className={active ? `${styles.modal} ${styles.open}` : styles.modal}>
      <div className={styles.background}></div>
      <div className={styles.whiteground}>
        <button className={styles.btn__close} onClick={isCloseModalPopup}>
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
                  {file.map((photo: string) => <div className={styles.photo__item} key={photo}><Image src={photo} layout='fill' alt='photo' priority /></div>)}
                  <button className={photoNumber > 1 && file.length > 1 ? styles.arrow__left : styles.hide} onClick={isMovePrevPhoto}>{'<'}</button>
                  <button className={photoNumber !== file.length && file.length > 1 ? styles.arrow__right : styles.hide} onClick={isMoveNextPhoto}>{'>'}</button>
                </div>
              </div>
          }
        </div>
      </div>
    </section>
  )
};

export { Modal };

