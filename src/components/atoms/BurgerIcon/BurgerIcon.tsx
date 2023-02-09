import React from 'react';
import { MenuProps } from '../../organisms/Header';
import styles from './BurgerIcon.module.scss';

const BurgerIcon = ({ menu }: MenuProps) => {
  return (
    <div className={menu ? `${styles.burger} ${styles.open}` : styles.burger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export { BurgerIcon };