import React from 'react';
import { IconProps } from '../IconType';

const CloseIcon = ({ color = "#373F8F", size = 24 } : IconProps) => {
  return (
    <>
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21" stroke={`${color}`}/>
        </svg>
    </>
  )
}

export { CloseIcon }