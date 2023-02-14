import React from 'react'
import { Title } from '../../components/atoms/Title';

type Props = {}

const menuPage = (props: Props) => {
  return (
    <section className='pages' style={{ margin: 0}}>
      <Title title='메뉴소개'/>
    </section>
  )
}

export default menuPage;