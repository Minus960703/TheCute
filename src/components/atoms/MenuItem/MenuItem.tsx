import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
import { menuSlice } from '../../../redux/menuReducer';
import * as modalActions from '../../../redux/modalReducer';
import { MenuProps } from '../../organisms/Header';
import { Title } from '../Title';
import styles from './MenuItem.module.scss';

interface MenuItemProps extends MenuProps {
  title: string;
  contents: {
    content: string;
    href?: string;
  }[]
}

const MenuItem = ({ menu, title, contents }: MenuItemProps) => {
  const dispatch = useDispatch();
  return (
    <ul className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      <Title title={title} />
      {contents
        && contents.map((current) => current.href
          ? <Link href={current.href} key={current.content}><li key={current.content} onClick={() => dispatch(menuSlice.actions.open())}>{current.content}</li></Link>
          : <li key={current.content} onClick={() => dispatch(modalActions.open())}>{current.content}</li>
      )}
    </ul>
  )
}

export { MenuItem };