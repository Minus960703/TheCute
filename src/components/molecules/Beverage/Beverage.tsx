import { useRouter } from 'next/router';
import React from 'react'
import { BeverageItem } from '../../atoms/BeverageItem';
import { Title } from '../../atoms/Title';
import styles from './Beverage.module.scss';

export interface BeverageProps {
  content: string;
  category: string;
  image: string;
}

const menuItems = [
  {
    content: '아메리카노 ( ICE / HOT )',
    category: 'coffee',
    image: 'Americano'
  },
  {
    content: '아메리카노 ( ICE / HOT )',
    category: 'coffee',
    image: 'Americano'
  },
  {
    content: '아메리카노 ( ICE / HOT )',
    category: 'coffee',
    image: 'Americano'
  },
];

const Beverage = () => {
  const router = useRouter();
  return (
    <div className={styles.menu__area}>
      {menuItems.map((current) =>
        <BeverageItem content={current.content} category={current.category} image={current.image} key={current.content} />
      )}
    </div>
  )
}

export { Beverage };