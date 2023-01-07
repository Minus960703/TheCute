import React from 'react'

interface IconProps {
  content :string;
  id :number;
  active :boolean;
}

const Icon = ({ content, id, active } :IconProps) => {
  return (
    <div >
      <div className='background'>
      </div>
      <style jsx>{`
        .background {
          width: 50px;
          aspect-ratio: 1/1 auto;
          background-color: white;
          border-radius: 50%;
          margin-bottom: 0.8rem;
          margin-right: 0.8rem;
        }
      `}</style>
    </div>
  )
}

export { Icon }