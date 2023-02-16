import { useRouter } from 'next/router';
import React from 'react'
import { AnimalInfoProps } from '../../../pages/dogs';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import styles from './PomeranianInfo.module.scss';

export interface AnimalFamilyProps {
  animal: {
    title: string;
    animals: {
      parentsDogs: AnimalInfoProps[];
      childDogs: AnimalInfoProps[];
    }
  },
}

const PomeranianInfo = ({ animal }: AnimalFamilyProps) => {
  const { parentsDogs, childDogs } = animal.animals;
  // const childDogs = animal.animals.childDogs;
  const router = useRouter();

  return (
    <section className={styles.animal__area}>
      <Title title={animal.title} />
      <div className={styles.family}>
        {parentsDogs.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} point={current.point} />)}
      </div>
      { animal.title === '포메라니안'
        &&  <div className={styles.path}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
      }
      <div className={styles.family}>
        {childDogs.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} point={current.point} />)}
      </div>
    </section>
  )
};

export { PomeranianInfo };