import React from 'react'

interface ImageFileProps {
  imageUrl :string;
}

const ImageFile = ({ imageUrl } :ImageFileProps) => {
  console.log(imageUrl)
  return (
    <div className='item'>
      <img src={imageUrl} alt="" />
      <style jsx>{`
        .item {
          width: calc(33.3% - 40px);
          aspect-ratio: 1/1 auto;
          margin: 10px 20px;
          cursor: pointer;
        }
        .item > img {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 16px;
        }
      `}</style>
    </div>
  )
}

export { ImageFile }