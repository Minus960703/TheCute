import React, { useState } from 'react';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import { MenuProps } from '../../organisms/Header';
import { Modal } from '../Modal';
import styles from './MobileMenu.module.scss';
import { MobileMenuList } from './MobileMenuObject';

export interface ModalProps {
  modal: boolean;
}

const MobileMenu = ({ menu }: MenuProps) => {
  const menuList = [...MobileMenuList];
  const [modal, setModal] = useState(false);
  return (
    <div className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      {menuList.map((current, index) => <MenuItem menu={menu} title={current.title} contents={current.contents} key={index} />)}
      {/* <Modal modal={modal} /> */}
    </div>
  )
}

export { MobileMenu };