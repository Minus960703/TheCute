import { GetServerSideProps } from 'next';
import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { PomeranianInfo } from '../../components/molecules/PomeranianInfo';
import { Cats } from '../api/catsInfo';
import { AnimalFamilyProps, AnimalInfoProps, AnimalProps } from '../types/AnimalType';

const catsPage = ({ treeAnimal }: AnimalProps<AnimalFamilyProps<AnimalInfoProps>>) => {
  return (
    <section className='pages'>
      <SeoHead title='THE 귀여워 | 고양이' />
      {
        treeAnimal
        && treeAnimal.map(
          (
            currnet
          ) => 
          <PomeranianInfo
            title={currnet.title}
            animals={currnet.animals}
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