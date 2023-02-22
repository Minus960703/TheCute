import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../Icon';
import styles from './AnimalImage.module.scss';
import Image from 'next/legacy/image';
import { AnimalInfoType } from '../../../types/AnimalType';
import { ModalStateType, RootState } from '../../../types/ReducerStateType';
import { modalSlice } from '../../../redux/modalReducer';

const AnimalImage = ({ name, file, age, birth, gender, point }: AnimalInfoType) => {
  const { active } = useSelector((state: RootState<ModalStateType>) => state.modal);
  const dispatch = useDispatch();
  return (
    <div className={!active ? styles.animal : `${styles.animal} ${styles.open}`} onClick={!active ? ()=>dispatch(modalSlice.actions.open({ type: 'info', content: { name, file, age, birth, gender, point }})) : ()=>{}}>
      <div className={styles.info}>
        <div className={styles.photo}>          
          <Image src={file[0]} layout="fill" alt={name} className={styles.card} priority/>
          <div className={styles.gender}>
            { gender === 'M'
                ? <Icon icon='MAN' />
                : <Icon icon='WOMAN' />
            }
          </div>
        </div>
        <p>{name}</p>
      </div>
    </div>
  )
}

export { AnimalImage };