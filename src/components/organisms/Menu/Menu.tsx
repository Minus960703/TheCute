import Image from 'next/image';
import React, { useState } from 'react';
import { HomeMenu } from '../../molecules/HomeMenu';
import { LogoArea } from '../../molecules/LogoArea';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className='header fixed'>
      <LogoArea />
      <HomeMenu />
    </nav>
  )
}

export { Menu }