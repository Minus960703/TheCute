import { GetServerSideProps } from 'next';
import React, { memo } from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalInfo } from '../../components/molecules/AnimalInfo';
import { AnimalTreeInfo } from '../../components/molecules/AnimalTreeInfo';
import { Animal, Pomeranian } from '../api/DogsInfo';
import { AnimalDetailType, AnimalInfoType, AnimalType } from '../../types/AnimalType';

const dogsPage = memo(
  (
    { animal, treeAnimal }: AnimalType<AnimalDetailType<AnimalInfoType>>
  ) => {
  return (
    <>
      <section className='pages'>
        <SeoHead title='더귀여워 | 강아지' />
        {treeAnimal &&
          treeAnimal.map(
            (
              animal: AnimalDetailType<AnimalInfoType>
            ) =>
              <AnimalTreeInfo
                key={animal.title}
                title={animal.title}
                animals={animal.animals}
              />
          )
        }
        {animal &&
          animal.map(
            (
              animal: AnimalDetailType<AnimalInfoType>,
              index: number
            ) =>
              <AnimalInfo
                key={index}
                title={animal.title}
                animals={animal.animals}
              />
          )
        }
      </section>
    </>
  )
});

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      treeAnimal: Pomeranian,
      animal: Animal
    }
  };
}

export default dogsPage;