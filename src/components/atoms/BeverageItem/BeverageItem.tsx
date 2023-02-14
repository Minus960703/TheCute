import React from 'react'
import { BeverageProps } from '../../molecules/Beverage';
import { Title } from '../Title';
import styles from './BeverageItem.module.scss';

const BeverageItem = ({ content, image, category }: BeverageProps) => {
  return (
    <div className={styles.menu__item}>
      <div className={styles.menu__photo}>
      </div>
      <Title title={content} />
    </div>
  )
}

export { BeverageItem }