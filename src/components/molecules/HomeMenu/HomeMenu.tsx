import { useState} from 'react';
import { MenuList, MenuListProps } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import { MenuProps } from '../../organisms/Header';
import Link from 'next/link';

const HomeMenu = ({ menu }: MenuProps) => {
  const [menuList, setMenuList] = useState([...MenuList]);
  // const isActiveMenuItem = (id: number) => {
  //   setMenuList(
  //     menuList.map(prev =>
  //       prev.id === id
  //         ? { ...prev, active: !prev.active }
  //         : prev.active
  //           ? { ...prev, active: !prev.active }
  //           : prev
  //     )
  //   )
  // }
  return (
    <ul className={menu ? `${styles.menu} ${styles.open}` : styles.menu} >
      { menuList
        && menuList.map((current) =><Link href={current.herf}><li key={current.id}>{current.content}</li></Link>)
      }
    </ul>
  )
}

export { HomeMenu }
