import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AnimalInfoProps } from '../../../pages/dogs';
import { Icon } from '../Icon';
import styles from './AnimalImage.module.scss';
import * as modalActions from '../../../redux/modalReducer'

interface AnimalInfoModalProps extends AnimalInfoProps {
  openModal: () => void;
}

const AnimalImage = ({ name, age, birth, gender, openModal }: AnimalInfoModalProps) => {
  const modal = useSelector((state) => state);
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