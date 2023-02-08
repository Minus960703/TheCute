import Image from 'next/image';
import React, { useState } from 'react';
import styles from './LogoArea.module.scss';

const LogoArea = () => {
  const [arrowBtn, setArrowBtn] = useState(false);
  const [menu, setMenu]         = useState(false);
  const isActiveArrowBtn = () => {
    setArrowBtn(prev => !prev);
  }
  const isActiveMenu = () => {
    setMenu(prev => !prev);
  }
  return (
    <div className={styles.logo__area}>
        <div className={styles.logo}>
            <Image src="/thucute.png" alt="logo" width="160" height="50"/>
            <div className={styles.logo__toggle} onClick={isActiveArrowBtn}>
                <h2>강아지</h2>
                <div className={arrowBtn ? styles.btn__area : `${styles.btn__area} ${styles.active}`}>
                    <Image src="/Icons/upArrow.svg" alt="icon" width="20" height="20"/>
                </div>
            </div>
        </div>
        <Image src="/Icons/menu.svg" alt="icon" width="20" height="20" onClick={isActiveMenu}/>
        <div className={menu ? `${styles.menu} ${styles.active}` : styles.menu}>
            <Image src="/Icons/close.svg" alt="icon" width="20" height="20" onClick={isActiveMenu}/>
        </div>
    </div>
  )
}

export { LogoArea }