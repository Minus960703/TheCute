import React from 'react';
import { MenuProps } from '../../organisms/Header';
import styles from './MobileMenu.module.scss';

const MobileMenu = ({ menu }: MenuProps) => {
  return (
    <div className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      
    </div>
  )
}

export { MobileMenu };