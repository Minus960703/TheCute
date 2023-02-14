import React from 'react';
import { Button } from '../../components/atoms/Button';
import { Map } from '../../components/atoms/Map';
import { Title } from '../../components/atoms/Title';

const locationPage = () => {
  return (
    <section className='pages'>
      <Title title='위치소개' />
      <Map address='서울특별시 마포구 어울마당로 44-1 라꼼마빌딩 2층' />
      <Button content='길 찾기'/>
    </section>
  )
}

export default locationPage;