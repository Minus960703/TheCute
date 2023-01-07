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
          width: 25%;
          aspect-ratio: 1/1 auto;
        }
        .item > img {
          width: 100%;
          aspect-ratio: 1/1 auto;
          border-radius: 16px;
        }
      `}</style>
    </div>
  )
}

export { ImageFile }