import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { menuSlice } from '../../../redux/menuReducer';
import { BurgerIcon } from '../../atoms/BurgerIcon';
import { Icon } from '../../atoms/Icon';
import { HomeMenu } from '../../molecules/HomeMenu';
import { HomeMenuModal } from '../../molecules/HomeMenuModal';
import { MobileMenu } from '../../molecules/MobileMenu';
import styles from './Header.module.scss';

export interface MenuProps {
  menu: boolean;
}

const Header = () => {
  const router = useRouter();
  const [arrowBtn, setArrowBtn] = useState({active: false, content: '강아지'});
  const { active } = useSelector((state: any)=> state.menu)
  useEffect(() => {
    active
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [active])
  const dispatch = useDispatch();
  const isActiveArrowBtn = (content: string = arrowBtn.content) => {
    setArrowBtn(prev => ({ ...prev, active: !prev.active, content: content }))
  }

  const isOpenMenuBar = () => {
    arrowBtn.active
      && isActiveArrowBtn()
    dispatch(menuSlice.actions.open());
  }
  
  return (
    <header className='header fixed'>
      <nav className={styles.logo__area}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <Image src="/thucute.png" alt="logo" width="160" height="50" onClick={active ? ()=>isOpenMenuBar() : ()=>{}}/>
          </Link>
          <div className={styles.logo__toggle} onClick={()=>isActiveArrowBtn()} style={(active || router.pathname !== '/') ? { display: 'none'} : {}}>
            <h2>{arrowBtn.content}</h2>
            <div className={arrowBtn.active ? styles.btn__area : `${styles.btn__area} ${styles.active}`}>
              <Icon icon='ARROW' />
            </div>
          </div>
          <HomeMenuModal active={arrowBtn.active} isActiveArrowBtn={isActiveArrowBtn} />
        </div>
        <button onClick={()=>isOpenMenuBar()} className={styles.btn__menu}>
          <BurgerIcon />
        </button>
      </nav>
      <HomeMenu />
      <MobileMenu />
    </header>
  )
}

export { Header }