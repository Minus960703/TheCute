import React from 'react'
import { AnimalDetailType, AnimalInfoType } from '../../../types/AnimalType';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import styles from './AnimalInfo.module.scss';

const AnimalInfo = ({ title, animals }: AnimalDetailType<AnimalInfoType>) => {
  const { kindAnimals } = animals;
  return (
    <section className={styles.animal__area}>
      <Title title={title} />
      {kindAnimals &&
        kindAnimals.map((current) => 
          <AnimalImage 
            key={current.name}
            name={current.name}
            file={current.file}
            age={current.age}
            birth={current.birth}
            gender={current.gender}
            point={current.point} 
          />
      )}
    </section>
  )
}

export { AnimalInfo };