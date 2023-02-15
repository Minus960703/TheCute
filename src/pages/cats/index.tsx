import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { PomeranianInfo } from '../../components/molecules/PomeranianInfo';
import { Cats } from '../api/catsInfo';

const catsPage = () => {
  return (
    <section className='pages'>
      <SeoHead title='THE 귀여워 | 고양이' />
      <PomeranianInfo animal={Cats}/>
    </section>
  )
}

export default catsPage;