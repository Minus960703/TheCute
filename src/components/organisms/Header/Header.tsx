import Image from 'next/image';
import React, { useState } from 'react';
import { DownArrow } from '../../atoms/Icons/DownArrow';
import { UpArrow } from '../../atoms/Icons/UpArrow';
import styles from './Header.module.scss';

const Header = () => {
  const [arrowBtn, setArrowBtn] = useState(false);
  return (
    <nav className='header fixed'>
      <div className={styles.logo__area}>
        <Image src="/thucute.png" alt="logo" width="160" height="50"/>
        <h2>강아지</h2>
        {arrowBtn 
          ? <UpArrow size={24} color={"#373F8F"} />
          : <DownArrow size={24} color={"#373F8F"} />
        }
      </div>
    </nav>
  )
}

export { Header }