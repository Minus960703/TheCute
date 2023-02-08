import React from 'react';
import { Label } from '../../atoms/Label';
import { MenuList } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';

const HomeMenu = () => {
  const menuList = [...MenuList];
  return (
    <div className={styles.menu}>
      { menuList
          && menuList.map((current)=><Label content={current.content} fontSize={"16px"} fontWeight={"500"}></Label>)
      }
    </div>
  )
}

export { HomeMenu }
