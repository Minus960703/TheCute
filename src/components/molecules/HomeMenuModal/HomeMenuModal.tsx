import React from 'react'
import styles from './HomeMenuModal.module.scss';

interface HomeMenuModalProps {
  active: boolean;
  isActiveArrowBtn: (e: any) => void;
}

const HomeMenuModal = ({ active, isActiveArrowBtn }: HomeMenuModalProps) => {
  const isControllData = (e: any) => {
    const eventTarget = e as HTMLElement;
    isActiveArrowBtn(eventTarget.innerText)
  }
  return (
    <div className={active ? `${styles.area} ${styles.open}` : styles.area} onClick={(e)=>{isControllData(e.target)}}>
      <span>강아지</span>
      <span>고양이</span>
    </div>
  )
}

export { HomeMenuModal };