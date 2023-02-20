import React from 'react';
import { Map } from '../../components/atoms/Map';
import { SeoHead } from '../../components/atoms/SeoHead';
import { Title } from '../../components/atoms/Title';

const address= '서울특별시 마포구 어울마당로 44-1 라꼼마빌딩 2층'

const locationPage = () => {
  return (
    <section className='pages'>
      <SeoHead title='THE 귀여워 | 위치' />
      <Title title='위치소개' />
      <Map address={address} />
      <span>{address}</span>
    </section>
  )
}

export default locationPage;