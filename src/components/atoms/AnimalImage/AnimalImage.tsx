import React from 'react'
import { useDispatch } from 'react-redux';
import { AnimalInfoProps } from '../../../pages/dogs';
import { Icon } from '../Icon';
import styles from './AnimalImage.module.scss';
import * as modalActions from '../../../redux/modalReducer';
import Image from 'next/image';

const AnimalImage = ({ name, file, age, birth, gender }: AnimalInfoProps) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.animal} onClick={()=>dispatch(modalActions.open())}>
      <div className={styles.info}>
        <div className={styles.photo}>
          <Image src={`/profile/${file}.png`} layout="fill" alt={"profile"} />
          <div>
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