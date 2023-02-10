import React from 'react'

interface LabelProps {
  fontWeight?: string;
  fontSize?: string;
  content: string | number;
  color?: string;
  align?: string;
  paddingWidth?: number;
  paddingHeight?: number;
  marginWidth?: number;
  marginHeight?: number;
}

const Label = ({ fontWeight, fontSize, content, color, align, paddingWidth, paddingHeight, marginWidth, marginHeight } :LabelProps) => {
  return (
    <>
      <span className='label'>{content}</span>
      {/* <style jsx>{`
        .label {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          color: ${color};
          // text-align: ${align};
          padding: ${paddingHeight ? paddingHeight : 0}px ${paddingWidth ? paddingWidth : 0}px;
          margin: ${marginHeight ? marginHeight : 0}px ${marginWidth ? marginWidth : 0}px;
        }
      `}</style> */}
    </>
  )
}

export { Label }