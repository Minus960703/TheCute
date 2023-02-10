import React from 'react';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import { MenuProps } from '../../organisms/Header';
import styles from './MobileMenu.module.scss';

const test = [
  {
    title: '이용안내',
    contents: [
      {
        content: '이용안내'
      }
    ]
  },
  {
    title: '메뉴',
    contents: [
      {
        content: '커피'
      },
      {
        content: '티'
      },
      {
        content: '음료'
      },
      {
        content: '기타'
      },
    ]
  },
  {
    title: '강아지',
    contents: [
      {
        content: '강아지'
      }
    ]
  },
  {
    title: '고양이',
    contents: [
      {
        content: '고양이'
      }
    ]
  },
  {
    title: '위치',
    contents: [
      {
        content: '오시는 길'
      }
    ]
  }
];

const MobileMenu = ({ menu }: MenuProps) => {
  return (
    <div className={menu ? `${styles.menu} ${styles.open}` : styles.menu}>
      {test.map((current) => <MenuItem menu={menu} title={current.title} contents={current.contents} />)}
    </div>
  )
}

export { MobileMenu };