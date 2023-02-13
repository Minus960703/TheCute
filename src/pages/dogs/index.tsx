import React, { useCallback, useState } from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalInfo } from '../../components/molecules/AnimalInfo';
import { Modal } from '../../components/molecules/Modal';
import { PomeranianInfo } from '../../components/molecules/PomeranianInfo';
import { Animal, Pomeranian } from '../api/dogsInfo';

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
    <>
      <section className='page__dogs'>
        <SeoHead title='THE 귀여워 | 강아지' />
        <PomeranianInfo animal={Pomeranian}/>
        {animal.map((current, index) => <AnimalInfo animal={current} key={index} />)}
      </section>
    </>
  )
}

export default dogsPage;