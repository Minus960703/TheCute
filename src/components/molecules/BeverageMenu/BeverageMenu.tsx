import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Title } from '../../atoms/Title';
import styles from './BeverageMenu.module.scss';

const BeverageMenuObject = [
  {
    content: '커피',
    href: '/coffee',
  },
  {
    content: '티',
    href: '/tea',
  },
  {
    content: '음료',
    href: '/drink',
  },
  {
    content: '기타',
    href: '/other',
  },
];

const BeverageMenu = () => {
  const router = useRouter();
  return (
    <div className={styles.menu__area}>
      <Title title="메뉴소개" />
      <ul className={styles.menu__item}>
        {BeverageMenuObject.map((current) => 
          <Link href={`/menu${current.href}`} key={current.content}><li className={(router.asPath.includes(current.href)) ? styles.select : ''}>{current.content}</li></Link>
        )}
      </ul>
    </div>
  )
}

export { BeverageMenu };