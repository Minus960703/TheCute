import React, { memo } from 'react';
import { SeoHead } from '../components/atoms/SeoHead'
import Image from 'next/image'
import Banner from 'public/open.jpg'

const HomePage = memo(() => {
  return (
    <>
      <SeoHead title='더귀여워' />
      <section className='home'>
        <article className='banner'>
          <Image src={Banner} layout='fill' alt='banner' priority />
        </article>
      </section>
    </>
  )
});

export default HomePage;