// import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react'
import { BeverageItem } from '../../atoms/BeverageItem';
import styles from './Beverage.module.scss';
import { BeverageItemList } from './BeverageObject';

export interface BeverageProps {
  content: string;
  category?: string;
  image: string;
}

const Beverage = () => {
  const menuItems = BeverageItemList
  const router = useRouter();  
  // console.log(menuItems.filter((current)=>current.category === router.query.type).map((current)=>console.log(current)))
  return (
    <div className={styles.menu__area}>
      {menuItems
        .filter((current)=>current.category === router.query.type)
        .map((current) =>
        <BeverageItem content={current.content} image={current.image} key={current.content} />
      )}
    </div>
  )
}

export { Beverage };

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
//   return { props: { response } };
// }