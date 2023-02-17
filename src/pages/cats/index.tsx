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
          &&  <PomeranianInfo
                title={treeAnimal[0].title}
                animals={treeAnimal[0].animals}
              />
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