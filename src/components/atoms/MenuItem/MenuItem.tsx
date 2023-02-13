import Link from 'next/link';
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
      {contents && contents.map((current, index) => <Link href={'/dogs'}><li key={index}>{current.content}</li></Link>)}
    </ul>
  )
}

export { MenuItem };