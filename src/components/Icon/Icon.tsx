import React, { FC } from 'react'
import iconSvg from '../../assets/icons/sprite.svg'
import { IconNames } from './IconNames'
import './Icon.css'
export type Size =
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'exception'
  | 'auto'
interface Props {
  size?: Size
  light?: boolean
  name: IconNames
  className?: string
  style?: React.CSSProperties
}

export const Icon: FC<Props> = ({
  name,
  size = 's',
  light = false,
  className,
  style = {},
}) => {
  return (
    <svg style={style} className={` ${size} ${className}`} viewBox="0 0 24 24">
      <use
        className={light ? 'light' : 'dark'}
        xlinkHref={`${iconSvg}#${name}`}
      />
    </svg>
  )
}

Icon.displayName = 'Icon'
