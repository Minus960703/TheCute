import React, { useEffect } from 'react'
import { Icon } from '../../atoms/Icon';
import styles from './Modal.module.scss';

const Modal = () => {
  // useEffect(()=>{
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "unset"
  //   }
  // },[])
  return (
    <section className={styles.modal}>
      <div className="background"></div>
      <div className="whiteground">
        <button className={styles.btn__close}>
          <Icon icon='CLOSE' />
        </button>
        {/* <img src={} alt=""/> */}
      </div>
      <style jsx>{`
        .background {
          background-color: black;
          width: 100vw;
          height: 100vh;
          position: fixed;
          bottom: -100vh;
          left: 0;
          z-index: 5;
          opacity: 0.9;
        }
        .whiteground {
          background-color: white;
          width: 100vw;
          height: 100vh;
          max-width: 700px;
          position: absolute;
          z-index: 6;
          top: 5%;
          left: 0;
          bottom: -100vh;
          border-top: 1px solid #000;
          border-radius: 16px;
          text-align: center;
        }
        .whiteground > img {
          width: calc(100% - 50px);
          height: calc(100% - 50px);
          margin: 25px;
          border-radius: 16px;
        }
      `}</style>
    </section>
  )
}

export { Modal }