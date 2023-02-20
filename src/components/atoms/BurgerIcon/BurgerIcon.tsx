import React from 'react';
import { useSelector } from 'react-redux';
import { MenuStateType, RootState } from '../../../types/ReducerStateType';
import styles from './BurgerIcon.module.scss';

const BurgerIcon = () => {
  const { active } = useSelector((state: RootState<MenuStateType>) => state.menu);
  return (
    <div className={active ? `${styles.burger} ${styles.open}` : styles.burger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export { BurgerIcon };