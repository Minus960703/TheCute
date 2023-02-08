import Image from 'next/image';
import React, { useState } from 'react';
import { DownArrowIcon } from '../../atoms/Icons/Arrow/DownArrowIcon';
import { UpArrowIcon } from '../../atoms/Icons/Arrow/UpArrowIcon';
import styles from './Header.module.scss';

const Header = () => {
  const [arrowBtn, setArrowBtn] = useState(false);
  return (
    <nav className='header fixed'>
      <div className={styles.logo__area}>
        <Image src="/thucute.png" alt="logo" width="160" height="50"/>
        <h2>강아지</h2>
        {arrowBtn 
          ? <UpArrowIcon size={24} color={"#373F8F"} />
          : <DownArrowIcon size={24} color={"#373F8F"} />
        }
      </div>
    </nav>
  )
}

export { Header }