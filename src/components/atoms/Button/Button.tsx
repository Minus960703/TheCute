import React from 'react'

export interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => {
  return (
    <button className='btn'>
      {content}
      <style jsx>{`
        .btn {
          border: none;
          border-radius: 16px;
          width: 100%;
          height: 48px;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          background-color: #373F8F;
          margin: 16px 0;
        }
      `}</style>
    </button>
  )
}

export { Button };