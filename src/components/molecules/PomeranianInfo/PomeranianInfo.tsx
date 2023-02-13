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
  const parentsDogs = animal.animals.parentsDogs;
  const childDogs = animal.animals.childDogs;

  return (
    <section className={styles.animal__area}>
      <Title title={animal.title} />
      <div className={styles.family}>
        {parentsDogs.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} />)}
      </div>
      <div className={styles.path}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.family}>
        {childDogs.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} />)}
      </div>
    </section>
  )
};

export { PomeranianInfo };