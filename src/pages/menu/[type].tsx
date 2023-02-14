import React from 'react'
import { Beverage } from '../../components/molecules/Beverage';
import { BeverageMenu } from '../../components/molecules/BeverageMenu';

type Props = {}

const menuPage = (props: Props) => {
  return (
    <section className='pages'>
      <BeverageMenu />
      <Beverage />
    </section>
  )
}

export default menuPage;