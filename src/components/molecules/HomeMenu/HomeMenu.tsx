import { useState} from 'react';
import { MenuList } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import { MenuProps } from '../../organisms/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HomeMenu = ({ menu }: MenuProps) => {
  const router = useRouter();
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
        && menuList.map((current) =>
          <Link href={current.href} key={current.href}>
            <li key={current.content} className={router.pathname === current.href ? `${styles.active}` : ''}>
              {current.content}
            </li>
          </Link>
        )
      }
    </ul>
  )
}

export { HomeMenu }
