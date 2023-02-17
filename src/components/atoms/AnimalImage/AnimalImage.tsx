import React from 'react'
import { useDispatch } from 'react-redux';
import { AnimalInfoProps } from '../../../pages/dogs';
import { Icon } from '../Icon';
import styles from './AnimalImage.module.scss';
import * as modalActions from '../../../redux/modalReducer';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const AnimalImage = ({ name, file, age, birth, gender, point }: AnimalInfoProps) => {
  const { active } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  return (
    <div className={!active ? styles.animal : `${styles.animal} ${styles.open}`} onClick={!active ? ()=>dispatch(modalActions.open({ type: 'info', content: { name, file, age, birth, gender, point }})) : ()=>{}}>
      <div className={styles.info}>
        <div className={styles.photo}>          
          <Image src={file} layout="fill" alt={"profile"} className={styles.card} priority/>
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