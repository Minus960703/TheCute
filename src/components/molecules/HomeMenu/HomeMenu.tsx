import { useRouter } from 'next/router'
import React from 'react'
import { Icon } from '../../atoms/Icon'

type Props = {}

const menuIcons = [
  {
    id: 1,
    content: '버찌',
    active: true,
  },
  {
    id: 2,
    content: '율무',
    active: false,
  },
  {
    id: 3,
    content: '에디',
    active: false,
  },
]
const HomeMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div className={router.pathname === '/' ? 'home-menu fixed' : 'home-menu'}>
      <h4 className='menu'>바로가기</h4>
      
        {menuIcons 
          && menuIcons.map(
            (current)=><Icon key={current.id} content={current.content} active={current.active} id={current.id}/>
          )
        }
      
      <style jsx>{`
        .menu {
          width: 100%;
          margin: 0.8rem 0;
        }
      `}</style>
    </div>
  )
}

export { HomeMenu }
