import React from 'react'
import { AnimalProps } from '../../../pages/dogs';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import styles from './PomeranianInfo.module.scss';

const PomeranianInfo = ({ animal }: AnimalProps) => {
  const animals = animal.animals;
  return (
    <section className={styles.animal__area}>
      <Title title={animal.title} />
      {animals.map((current) => <AnimalImage name={current.name} age={current.age} birth={current.birth} gender={current.gender} />)}
    </section>
  )
}

export { PomeranianInfo };