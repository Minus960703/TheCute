import { GetServerSideProps } from 'next';
import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { AnimalTreeInfo } from '../../components/molecules/AnimalTreeInfo';
import { Cats } from '../api/CatsInfo';
import { AnimalDetailType, AnimalInfoType, AnimalType } from '../../types/AnimalType';

const catsPage = ({ treeAnimal }: AnimalType<AnimalDetailType<AnimalInfoType>>) => {
  return (
    <section className='pages'>
      <SeoHead title='THE 귀여워 | 고양이' />
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
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      treeAnimal: Cats,
    }
  };
}

export default catsPage;