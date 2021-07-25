import React, { FC } from 'react'
import { Icon } from '../Icon'
import { Size } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import './Loader.css'

interface props {
  size?: Size
}
export const Loader: FC<props> = ({ size }) => {
  return <Icon size={size} name={IconNames.spinner} className="spinner" />
}
Loader.displayName = 'Loader'
