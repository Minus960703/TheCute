import React from 'react'
import { AnimalProps } from '../../../pages/dogs';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import styles from './AnimalInfo.module.scss';

const AnimalInfo = ({ animal }: AnimalProps) => {
  const animals = [...animal.animals];
  return (
    <section className={styles.animal__area}>
      <Title title={animal.title} />
      {animals.map((current) => <AnimalImage name={current.name} file={current.file} age={current.age} birth={current.birth} gender={current.gender} key={current.name} point={current.point} />)}
    </section>
  )
}

export { AnimalInfo };