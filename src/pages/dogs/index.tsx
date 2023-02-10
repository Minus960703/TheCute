import React from 'react'
import { Icon } from '../../components/atoms/Icon';
import { Label } from '../../components/atoms/Label';
import { SeoHead } from '../../components/atoms/SeoHead';
import { Title } from '../../components/atoms/Title';
import { AnimalInfo } from '../../components/molecules/AnimalInfo';
import { Modal } from '../../components/molecules/Modal';
import { Animal } from '../api/dogsInfo';

export interface AnimalProps {
  animal: {
    title: string;
    animals: AnimalInfoProps[]
  }
}

export interface AnimalInfoProps {
  name: string;
  age: number;
  birth: string;
  gender: string;
}

const dogsPage = () => {
  const animal = Animal;
  return (
    <section className='page__dogs'>
      <SeoHead title='THE 귀여워 | 강아지' />
      { animal.map((current)=> <AnimalInfo animal={current} />)}
    </section>
  )
}

export default dogsPage;