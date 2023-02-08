import React from 'react';
import { IconProps } from '../../IconType';

const ManIcon = ({ color = "#A5D8FF", size = 24 } : IconProps) => {
  return (
    <>
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V9.10526M1 1H8M1 1L8.36842 8"    stroke={`${color}`} stroke-width="2"/>
            <circle cx="11.3158" cy="10.5789" r="4.42105" stroke={`${color}`} stroke-width="2"/>
        </svg>
    </>
  )
}

export { ManIcon }
