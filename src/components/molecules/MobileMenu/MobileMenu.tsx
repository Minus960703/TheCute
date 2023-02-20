import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import styles from './MobileMenu.module.scss';
import { MobileMenuList } from '../../../pages/api/MobileMenuObject';
import { MenuStateType, RootState } from '../../../types/ReducerStateType';

const MobileMenu = React.memo(function () {
  const menuList = [...MobileMenuList];
  const { active } = useSelector((state: RootState<MenuStateType>) => state.menu);
  return (
    <div className={active ? `${styles.menu} ${styles.open}` : styles.menu}>
      {menuList.map((current) => <MenuItem menu={active} title={current.title} contents={current.contents} key={current.title} />)}
    </div>
  )
});

export { MobileMenu };