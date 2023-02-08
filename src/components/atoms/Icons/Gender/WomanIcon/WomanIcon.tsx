import React from 'react';
import { IconProps } from '../../IconType';

const WomanIcon = ({ color = "#FAA2C1", size = 24 } : IconProps) => {
  return (
    <>
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.5" cy="5.5" r="4.5" stroke={`${color}`} stroke-width="2"/>
            <path d="M5.5 10.5V15.25M5.5 20V15.25M5.5 15.25H2M5.5 15.25H9" stroke={`${color}`} stroke-width="2"/>
        </svg>
    </>
  )
}

export { WomanIcon }
