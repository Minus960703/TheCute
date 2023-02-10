import React from 'react'
import { AnimalProps } from '../../../pages/dogs';
import { AnimalImage } from '../../atoms/AnimalImage';
import { Title } from '../../atoms/Title';
import styles from './AnimalInfo.module.scss';

export interface AnimalModalProps extends AnimalProps {
  openModal: ()=>void;
}

const AnimalInfo = ({ animal, openModal }: AnimalModalProps) => {
  const animals = [...animal.animals];
  return (
    <section className={styles.animal__area}>
      <Title title={animal.title} />
      {animals.map((current) => <AnimalImage name={current.name} age={current.age} birth={current.birth} gender={current.gender} key={current.name} openModal={openModal} />)}
    </section>
  )
}

export { AnimalInfo };