import Image from 'next/image';
import React from 'react'
import { BeverageProps } from '../../molecules/Beverage';
import { Title } from '../Title';
import styles from './BeverageItem.module.scss';

const BeverageItem = ({ content, image }: BeverageProps) => {
  return (
    <div className={styles.menu__item}>
      <div className={styles.menu__photo}>
        <Image src={image} layout="fill" alt="Beverage" priority/>
      </div>
      <Title title={content} />
    </div>
  )
}

export { BeverageItem }