import React, { FC } from 'react'

interface ButtonProps {
  name: string
  bgColor?: string
  isBold?: boolean
}
export const Button: FC<ButtonProps> = ({
  name,
  bgColor = '#0066FF',
  isBold,
}) => {
  return (
    <button
      className={`p-5 w-full text-white ${isBold ? 'font-bold' : ''}`}
      style={{ backgroundColor: bgColor, borderRadius: '50px' }}
    >
      {name}
    </button>
  )
}

Button.displayName = 'Button'
