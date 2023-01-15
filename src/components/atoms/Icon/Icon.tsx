import React from 'react'

interface IconProps {
  content :string;
  id :number;
  active :boolean;
}

const Icon = ({ content, id, active } :IconProps) => {
  return (
    <div className='icon'>
      <div className='background'></div>
      <p className="content">
        {content}
      </p>
      <style jsx>{`
        .icon {
          text-align: center;
          margin-bottom: 0.8rem;
          margin-right: 0.8rem;
        }
        .background {
          width: 50px;
          aspect-ratio: 1/1 auto;
          background-color: #e7f5ff;
          border-radius: 50%;
          // margin-bottom: 0.8rem;
          // margin-right: 0.8rem;
        }
        .content {
          font-size: 14px;
          margin: 0.5rem 0;
          font-weight: 700;
        }
      `}</style>
    </div>
  )
}

export { Icon }