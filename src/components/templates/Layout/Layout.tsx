import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../../molecules/Modal';
import { Header } from '../../organisms/Header'

interface LayOutProps {
  children : ReactNode;
}

const Layout = ({children} :LayOutProps) => {
  const [modal, setModal] = useState({ active: false });
  const openModal = () => {
    setModal({...modal, active: !modal.active});
  }
  const router = useRouter();
  return (
    <div>
      <Header />
      <main className={router.pathname.includes('/detail') ? `main background-gray` : `main`}>
        {children}
      </main>
      {/* {router.pathname ==='/' && <Footer />} */}
      <Modal />
    </div>
  )
}

export default Layout