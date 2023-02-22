import React, { memo } from 'react';
import { MenuList } from '../../../pages/api/HomeMenuObject';
import styles from './HomeMenu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { MenuStateType, RootState } from '../../../types/ReducerStateType';

interface HomeMenuProps {
  homeModal: boolean;
  isActiveArrowBtn: () => void;
}

const HomeMenu = ({ homeModal, isActiveArrowBtn }: HomeMenuProps) => {
  const router = useRouter();
  const menuList = [...MenuList];
  const { active } = useSelector((state: RootState<MenuStateType>) => state.menu);
  return (
    <ul className={active ? `${styles.menu} ${styles.open}` : styles.menu} >
      { menuList
        && menuList.map((menu) =>
          <Link href={menu.href} key={menu.href} onClick={() => homeModal && isActiveArrowBtn()}>
            <li className={router.asPath === '/'
                            ? ''
                            : (menu.href.includes('/menu')
                              ? menu.href.includes(router.asPath.split('/')[1])
                              : menu.href.includes(router.asPath)) ? `${styles.active}` : ''}>
              {menu.content}
            </li>
          </Link>
        )
      }
    </ul>
  )
}

export { HomeMenu }
