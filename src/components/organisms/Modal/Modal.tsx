import React, { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'

interface ModalProps {
  handlerModal :any;
  imgUrl :string;
} 

const Modal = ({ handlerModal, imgUrl } :ModalProps) => {
  console.log(handlerModal)
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset"
    }
  },[])
  return (
    <div>
      <div className="background"></div>
      <div className="whiteground">
        <GrClose style={{position: 'absolute', top: '6px', right: '6px', cursor: 'pointer'}} onClick={handlerModal}/>
        {/* <img src={} alt=""/> */}
      </div>
      <style jsx>{`
        .background {
          background-color: black;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 4;
          opacity: 0.9;
        }
        .whiteground {
          background-color: white;
          width: 60%;
          height: 60%;
          max-width: 700px;
          position: fixed;
          z-index: 5;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
    </div>
  )
}

export { Modal }