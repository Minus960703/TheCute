import { useState} from 'react';
import { MenuList, MenuListProps } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import { MenuProps } from '../../organisms/Header';

const HomeMenu = ({ menu }: MenuProps) => {
  const [menuList, setMenuList]= useState([...MenuList]);
  const isActiveMenuItem = ({ id = 1 }: MenuListProps) => {
    console.log(menuList)
    setMenuList((prev) => ({
      ...prev,
      active: true
    }))
    console.log(menuList)

    // setMenuList((prev: MenuListProps) => ({
      
    // }))
  }
  return (
    <>
      { !menu 
          &&  <ul className={styles.menu} onClick={isActiveMenuItem}>
                { menuList
                    && menuList.map((current)=><li key={current.id}>{current.content}</li>)
                }
              </ul>
      }
    </>
  )
}

export { HomeMenu }
