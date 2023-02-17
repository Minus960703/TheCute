import { GetServerSideProps } from 'next';
import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalInfo } from '../../components/molecules/AnimalInfo';
import { PomeranianInfo } from '../../components/molecules/PomeranianInfo';
import { Animal, Pomeranian } from '../api/dogsInfo';

export interface AnimalProps<T> {
  animal: Array<T>;
}

export interface AnimalDetailProps<T> {
  title: string;
  animals: Array<T>;
}

export interface AnimalInfoProps {
  name: string;
  file: string;
  age: number;
  birth: string;
  gender: string;
  point?: string[];
}

const dogsPage = ({ animal }: AnimalProps<AnimalDetailProps<AnimalInfoProps>>) => {
  return (
    <>
      <section className='pages'>
        <SeoHead title='THE 귀여워 | 강아지' />
        <PomeranianInfo animal={Pomeranian}/>
        {animal.map(
          (
            current: AnimalDetailProps<AnimalInfoProps>,
            index: number
          ) =>
          <AnimalInfo
            key={index} 
            title={current.title}
            animals={current.animals}
          />
        )}
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      pomeranian: Pomeranian,
      animal: Animal
    }
  };
}

export default dogsPage;