import { ComponentProps, ElementType } from 'react'
import { CardCountCheckContainer } from './style'

import SVG from 'react-inlinesvg'

export interface CardCountCheckProps
  extends ComponentProps<typeof CardCountCheckContainer> {
  count: number
  icon: string
  name: string
  hasActive: boolean
  as?: ElementType
}

export function CardCountCheck({
  count,
  name,
  icon,
  hasActive,
  ...props
}: CardCountCheckProps) {
  return (
    <CardCountCheckContainer
      state={hasActive ? 'active' : 'default'}
      {...props}
    >
      <div>
        <div>
          <SVG src={icon} height="auto" />
          <h3>{String(count).padStart(2, '0')}</h3>
        </div>
        <svg width="26" height="24">
          <path
            d="M19.7536 17.7359L18 16L21.6692 12.3679L18 8.73585L19.7536 7L25.1758 12.3679L19.7536 17.7359Z"
            fill="#4DA977"
          />
        </svg>
      </div>
      <span>{name}</span>
    </CardCountCheckContainer>
  )
}
