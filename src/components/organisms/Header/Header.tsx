import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BurgerIcon } from '../../atoms/BurgerIcon';
import { Icon } from '../../atoms/Icon';
import { HomeMenu } from '../../molecules/HomeMenu';
import { MobileMenu } from '../../molecules/MobileMenu';
import styles from './Header.module.scss';

export interface MenuProps {
  menu: boolean;
}

const Header = () => {
  const router = useRouter();
  const [arrowBtn, setArrowBtn] = useState(false);
  const [menu, setMenu]         = useState(false);
  const isActiveArrowBtn = () => {
    setArrowBtn(prev => !prev);
  }
  const isActiveMenu = () => {
    setMenu(prev => !prev);
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menu])
  return (
    <header className='header fixed'>
      <nav className={styles.logo__area}>
        <div className={styles.logo}>
          <Image src="/thucute.png" alt="logo" width="160" height="50"/>
          <div className={styles.logo__toggle} onClick={isActiveArrowBtn} style={(menu || router.pathname !== '/') ? { display: 'none'} : {}}>
            <h2>강아지</h2>
            <div className={arrowBtn ? styles.btn__area : `${styles.btn__area} ${styles.active}`}>
              <Icon icon='ARROW' />
            </div>
          </div>
        </div>
        <button onClick={isActiveMenu} className={styles.btn__menu}>
          <BurgerIcon menu={menu} />
        </button>
      </nav>
      <HomeMenu menu={menu} />
      <MobileMenu menu={menu} />
    </header>
  )
}

export { Header }