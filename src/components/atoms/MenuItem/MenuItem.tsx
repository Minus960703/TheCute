import React from 'react'
import { MenuProps } from '../../organisms/Header';
import styles from './MenuItem.module.scss';

interface MenuItemProps extends MenuProps {
  title: string;
  contents: {content: string}[]
}

const MenuItem = ({ menu, title, contents }: MenuItemProps) => {
  return (
    <ul className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      <h2>{title}</h2>
      {contents && contents.map((current) => <li key={current.content}>{current.content}</li>)}
    </ul>
  )
}

export { MenuItem };