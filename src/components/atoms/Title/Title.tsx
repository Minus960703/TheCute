import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className={styles.title}>
      {title}
    </h2>
  )
}

export { Title };