import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import { MenuProps } from '../../organisms/Header';
import styles from './MobileMenu.module.scss';
import { MobileMenuList } from './MobileMenuObject';

export interface ModalProps {
  modal: boolean;
}

const MobileMenu = ({ menu }: MenuProps) => {
  const menuList = [...MobileMenuList];
  const { active } = useSelector((state: any) => state.menu);
  const [modal, setModal] = useState(false);
  return (
    <div className={active ? `${styles.menu} ${styles.open}` : styles.menu}>
      {menuList.map((current) => <MenuItem menu={active} title={current.title} contents={current.contents} key={current.title} />)}
      {/* <Modal modal={modal} /> */}
    </div>
  )
}

export { MobileMenu };