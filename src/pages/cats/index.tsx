import { GetServerSideProps } from 'next';
import React, { memo } from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalTreeInfo } from '../../components/molecules/AnimalTreeInfo';
import { Cats } from '../api/CatsInfo';
import { AnimalDetailType, AnimalInfoType, AnimalType } from '../../types/AnimalType';

const catsPage = memo(({ treeAnimal }: AnimalType<AnimalDetailType<AnimalInfoType>>) => {
  return (
    <section className='pages'>
      <SeoHead title='더귀여워 | 고양이' />
      {
        treeAnimal
        && treeAnimal.map(
          (
            cat
          ) => 
          <AnimalTreeInfo
            key={cat.title}
            title={cat.title}
            animals={cat.animals}
          />
        )
      }
    </section>
  )
})

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      treeAnimal: Cats,
    }
  };
}

export default catsPage;