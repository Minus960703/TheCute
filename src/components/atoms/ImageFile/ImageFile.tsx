import React from 'react'
import styles from './ImageFile.module.scss';

interface ImageFileProps {
  imageUrl :string;
  handlerModal :any;
}

const ImageFile = ({ imageUrl, handlerModal } :ImageFileProps) => {
  return (
    <div className={styles.item} onClick={handlerModal}>
      <img src={imageUrl} alt="" />
    </div>
  )
}

export { ImageFile }