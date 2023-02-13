import React from 'react'
import { useDispatch } from 'react-redux';
import { AnimalInfoProps } from '../../../pages/dogs';
import { Icon } from '../Icon';
import styles from './AnimalImage.module.scss';
import * as modalActions from '../../../redux/modalReducer';

const AnimalImage = ({ name, age, birth, gender }: AnimalInfoProps) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.animal} onClick={()=>dispatch(modalActions.open())}>
      <div className={styles.info}>
        <div className={styles.photo}>
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