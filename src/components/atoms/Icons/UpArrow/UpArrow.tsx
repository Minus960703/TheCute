import React from 'react';
import { IconProps } from '../IconType';

const UpArrow = ({color, size} : IconProps) => {
  return (
    <>
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.5" stroke={`${color}`}/>
            <path d="M4 13L10 7L16 13" stroke={`${color}`}/>
        </svg>
    </>
  )
}

export { UpArrow }