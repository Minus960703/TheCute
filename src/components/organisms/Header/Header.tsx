import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className='header fixed'>
      <div>
        <Image src="/thucute.png" alt="logo" width="200" height="64"/>
        {/* <img src="/public/" alt="" /> */}
      </div>
      <style jsx>{`
        .header {
          display: flex;
          width: calc(100% - 48px);
          padding: 0 24px;
          height: 80px;
          border-bottom: 1px solid #ccc;
          align-items: center;
          justify-content: flex-start;
          background-color: white;
          z-index: 4;
        }
        .header.fixed {
          position: absolute;
          position: sticky;
          top: 0;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
    </nav>
  )
}

export { Header }