import { useRouter } from 'next/router';
import React from 'react'
import { AnimalDetailProps, AnimalInfoProps } from '../../../pages/types/AnimalType';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import styles from './PomeranianInfo.module.scss';

const PomeranianInfo = ({ title, animals }: AnimalDetailProps<AnimalInfoProps>) => {
  const { parentsAnimals, childAnimals } = animals;  
  const router = useRouter();

  return (
    <section className={styles.animal__area}>
      <Title title={title} />
      <div className={styles.family}>
        {parentsAnimals && parentsAnimals.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} point={current.point} />)}
      </div>
      { title === '포메라니안'
        &&  <div className={styles.path}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
      }
      <div className={styles.family}>
        {childAnimals && childAnimals.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} point={current.point} />)}
      </div>
    </section>
  )
};

export { PomeranianInfo };