import React from 'react'
import styles from './HomeMenuModal.module.scss';

interface HomeMenuModalProps {
  active: boolean;
}

const HomeMenuModal = ({ active }: HomeMenuModalProps) => {
  console.log(active)
  return (
    <div className={active ? `${styles.area} ${styles.open}` : styles.area}>
      <span>강아지</span>
      <span>고양이</span>
    </div>
  )
}

export { HomeMenuModal };