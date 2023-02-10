import React from 'react'
import { MenuProps } from '../../organisms/Header';
import { Title } from '../Title';
import styles from './MenuItem.module.scss';

interface MenuItemProps extends MenuProps {
  title: string;
  contents: {content: string}[]
}

const MenuItem = ({ menu, title, contents }: MenuItemProps) => {
  return (
    <ul className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      <Title title={title} />
      {contents && contents.map((current, index) => <li key={index}>{current.content}</li>)}
    </ul>
  )
}

export { MenuItem };