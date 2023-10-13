import { ComponentProps, ElementType } from 'react'
import { Badge } from '../Badge'
import { CardNotificationContainer } from './style'

export interface CardNotificationProps
  extends ComponentProps<typeof CardNotificationContainer> {
  code: string
  name: string
  date: string
  status: 'default' | 'success' | 'warning' | 'danger'
  labelStatus: string
  as?: ElementType
}

export function CardNotification({
  code,
  name,
  date,
  status,
  labelStatus,
  ...props
}: CardNotificationProps) {
  return (
    <CardNotificationContainer {...props}>
      <div>
        <small>#{code}</small>
        <h4>{name}</h4>
        <strong>{date}</strong>
        <Badge size="xs" variant={status}>
          {labelStatus}
        </Badge>
      </div>
      <svg width="26" height="24">
        <path
          d="M19.7536 17.7359L18 16L21.6692 12.3679L18 8.73585L19.7536 7L25.1758 12.3679L19.7536 17.7359Z"
          fill="#4DA977"
        />
      </svg>
    </CardNotificationContainer>
  )
}
