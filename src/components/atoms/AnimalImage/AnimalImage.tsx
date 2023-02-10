import React from 'react'
import { AnimalInfoProps } from '../../../pages/dogs';
import { Icon } from '../Icon';
import styles from './AnimalImage.module.scss';

const AnimalImage = ({ name, age, birth, gender }: AnimalInfoProps) => {
  return (
    <div className={styles.animal}>
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