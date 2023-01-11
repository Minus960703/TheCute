import React, { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'

type Props = {}

const Modal = (props: Props) => {
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
        <GrClose style={{position: 'absolute', top: '6px', right: '6px'}}/>
        <img src='https://velog.velcdn.com/images/cjw960703/post/4cf8650e-2f9f-4924-8a1a-5e1c1fa226d4/image.jpeg' alt=""/>
      </div>
      <style jsx>{`
        .background {
          background-color: black;
          width: 100vw;
          height: 100vh;
          position: absolute;
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
          position: absolute;
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