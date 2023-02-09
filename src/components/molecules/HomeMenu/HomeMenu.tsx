import React from 'react';
import { Label } from '../../atoms/Label';
import { MenuList } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import { MenuProps } from '../../organisms/Header';

const HomeMenu = ({ menu }: MenuProps) => {
  const menuList = [...MenuList];
  return (
    <>
      { !menu 
          &&  <div className={styles.menu}>
                { menuList
                    && menuList.map((current)=><Label content={current.content} fontSize={"16px"} fontWeight={"500"}></Label>)
                }
              </div>
      }
    </>
  )
}

export { HomeMenu }
