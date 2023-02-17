import { GetServerSideProps } from 'next';
import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalInfo } from '../../components/molecules/AnimalInfo';
import { PomeranianInfo } from '../../components/molecules/PomeranianInfo';
import { Animal, Pomeranian } from '../api/dogsInfo';
import { AnimalDetailProps, AnimalFamilyProps, AnimalInfoProps, AnimalProps } from '../types/AnimalType';

const dogsPage =
  (
    { animal }: AnimalProps<AnimalDetailProps<AnimalInfoProps>>,
    { treeAnimal }: AnimalProps<AnimalFamilyProps<AnimalInfoProps>>
  ) => {
  return (
    <>
      <section className='pages'>
        <SeoHead title='THE 귀여워 | 강아지' />
        {treeAnimal
          && <PomeranianInfo title={treeAnimal[0].title} animals={treeAnimal[0].animals} />
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