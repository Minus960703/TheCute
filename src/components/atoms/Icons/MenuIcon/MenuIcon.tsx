import React from 'react';
import { IconProps } from '../IconType';

const MenuIcon = ({ color = "#373F8F", size = 24 } : IconProps) => {
  return (
    <>
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="8.5" x2="18" y2="8.5"   stroke={`${color}`}/>
          <line y1="16.5" x2="18" y2="16.5" stroke={`${color}`}/>
          <line y1="0.5" x2="18" y2="0.5"   stroke={`${color}`}/>
        </svg>
    </>
  )
}

export { MenuIcon }