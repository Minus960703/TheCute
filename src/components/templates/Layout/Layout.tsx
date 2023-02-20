import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'
import { Modal } from '../../molecules/Modal';
import { Header } from '../../organisms/Header'

interface LayOutProps {
  children: ReactNode;
}

const Layout = ({children} :LayOutProps) => {
  const router = useRouter();
  return (
    <div className='mobile'>
      <Header />
      <main className={router.pathname.includes('/detail') ? `main background-gray` : `main`}>
        {children}
      </main>
      <Modal />
    </div>
  )
}

export default React.memo(Layout);