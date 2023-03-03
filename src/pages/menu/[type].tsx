import React, { memo } from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { Beverage } from '../../components/molecules/Beverage';
import { BeverageMenu } from '../../components/molecules/BeverageMenu';

const menuPage = memo(() => {
  return (
    <section className='pages'>
      <SeoHead title='더귀여워 | 메뉴' />
      <BeverageMenu />
      <Beverage />
    </section>
  )
})

export default menuPage;