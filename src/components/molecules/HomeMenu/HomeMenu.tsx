import { useState} from 'react';
import { MenuList } from './HomeMenuObject';
import styles from './HomeMenu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

interface HomeMenuProps {
  homeModal: boolean;
  isActiveArrowBtn: any;
}

const HomeMenu = ({ homeModal, isActiveArrowBtn }: HomeMenuProps) => {
  const router = useRouter();
  const [menuList, setMenuList] = useState([...MenuList]);
  const { active } = useSelector((state: any) => state.menu);
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
    <ul className={active ? `${styles.menu} ${styles.open}` : styles.menu} >
      { menuList
        && menuList.map((current) =>
          <Link href={current.href} key={current.href} onClick={()=>homeModal && isActiveArrowBtn()}>
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
