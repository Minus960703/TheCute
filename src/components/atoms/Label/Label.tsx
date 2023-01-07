import React from 'react'

interface LabelProps {
  fontWeight? :string
  fontSize? :string
  content :string | number
  color? :string
}

const Label = ({fontWeight, fontSize, content, color} :LabelProps) => {
  return (
    <div>
      <span className='label'>{content}</span>
      <style jsx>{`
        .label {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          color: ${color}
        }
      `}</style>
    </div>
  )
}

export { Label }