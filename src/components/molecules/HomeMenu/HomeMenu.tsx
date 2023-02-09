import { useState} from 'react';
import { MenuList, MenuListProps } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import { MenuProps } from '../../organisms/Header';

const HomeMenu = ({ menu }: MenuProps) => {
  const [menuList, setMenuList] = useState([...MenuList]);
  console.log(menuList)
  // const isActiveMenuItem = (id: number) => {
  //   menuList.map((prev) => {
  //     prev.id === id
  //       && setMenuList((prevData) => ({
  //         ...prevData,
  //         active: !prev.active
  //       }));
  //   });
  // }
  return (
    <>
      { !menu 
          &&  <ul className={styles.menu} onClick={ (e)=>console.log(e.target)}>
                { menuList
                    && menuList.map((current)=><li key={current.id}>{current.content}</li>)
                }
              </ul>
      }
    </>
  )
}

export { HomeMenu }
