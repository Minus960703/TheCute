import { GetServerSideProps } from 'next';
import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalInfo } from '../../components/molecules/AnimalInfo';
import { AnimalTreeInfo } from '../../components/molecules/AnimalTreeInfo';
import { Animal, Pomeranian } from '../api/dogsInfo';
import { AnimalDetailProps, AnimalInfoProps, AnimalProps } from '../../types/AnimalType';

const dogsPage =
  (
    { animal, treeAnimal }: AnimalProps<AnimalDetailProps<AnimalInfoProps>>
  ) => {
  return (
    <>
      <section className='pages'>
        <SeoHead title='THE 귀여워 | 강아지' />
        {treeAnimal &&
          treeAnimal.map(
            (
              current: AnimalDetailProps<AnimalInfoProps>
            ) =>
            <AnimalTreeInfo
              key={current.title}
              title={current.title}
              animals={current.animals}
            />
          )
        }
        {animal &&
          animal.map(
            (
              current: AnimalDetailProps<AnimalInfoProps>,
              index: number
            ) =>
            <AnimalInfo
              key={index} 
              title={current.title}
              animals={current.animals}
            />
          )
        }
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      treeAnimal: Pomeranian,
      animal: Animal
    }
  };
}

export default dogsPage;