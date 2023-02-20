import Link from 'next/link';
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { menuSlice } from '../../../redux/menuReducer';
import { modalSlice } from '../../../redux/modalReducer';
import { MobileMenuDetail, MobileMenuType } from '../../../types/MobileMenu';
import { Title } from '../Title';
import styles from './MenuItem.module.scss';

interface MenuItems extends MobileMenuType {
  menu: boolean;
}

const DetailMenuItem = React.memo(function ({ content, href }: MobileMenuDetail) {
  const dispatch = useDispatch();
  const isOpenDetailMenu = useCallback(() => {
    href 
      ? dispatch(menuSlice.actions.open())
      : dispatch(modalSlice.actions.open({ type: 'guide', content: '' }))
  }, [])
  return (
    <li onClick={() => isOpenDetailMenu()}>
      {content}
    </li>
  );
});

const MenuItem = React.memo(function ({ menu, title, contents }: MenuItems) {
  return (
    <ul className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      <Title title={title} />
      {contents
        && contents.map((menuItem) => menuItem.href
          ? <Link href={menuItem.href} key={menuItem.content}><DetailMenuItem key={menuItem.content} content={menuItem.content} href={menuItem.href} /></Link>
          : <DetailMenuItem key={menuItem.content} content={menuItem.content} href={menuItem.href} />
        )}
    </ul>
  )
});

export { MenuItem };