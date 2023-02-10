import { useState} from 'react';
import { MenuList, MenuListProps } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import { MenuProps } from '../../organisms/Header';

const HomeMenu = ({ menu }: MenuProps) => {
  const [menuList, setMenuList] = useState([...MenuList]);
  const isActiveMenuItem = (id: number) => {
    setMenuList(
      menuList.map(prev =>
        prev.id === id
          ? { ...prev, active: !prev.active }
          : prev.active
            ? { ...prev, active: !prev.active }
            : prev
      )
    )
  }
  return (
    <ul className={menu ? `${styles.menu} ${styles.open}` : styles.menu} >
      { menuList
          && menuList.map((current)=><li key={current.id} onClick={()=>isActiveMenuItem(current.id)} style={ current.active ? { fontWeight: '700', color: '#373F8F' } : {}}>{current.content}</li>)
      }
    </ul>
  )
}

export { HomeMenu }
