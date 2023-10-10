import { Avatar } from '../Avatar'

import { ComponentProps, ElementType } from 'react'

import {
  CardInfoCheckAlert,
  CardInfoCheckCode,
  CardInfoCheckContainer,
  CardInfoCheckContainerPhoto,
  CardInfoCheckText,
} from './styles'
import { Badge } from '../Badge'

export interface CardInfoCheckProps
  extends ComponentProps<typeof CardInfoCheckContainer> {
  image: string
  code: string
  name: string
  email: string
  date: string
  typeCheck: string
  status: string
  alert: number
  as?: ElementType
}

export function CardInfoCheck({
  image,
  code,
  name,
  email,
  date,
  typeCheck,
  status,
  alert,
  ...props
}: CardInfoCheckProps) {
  return (
    <CardInfoCheckContainer {...props}>
      <CardInfoCheckContainerPhoto>
        <Avatar sourceImg={image} altImg={`Photo - ${name}`} size="xs" />

        {alert > 0 ? (
          <CardInfoCheckAlert>
            <svg width="24" height="24">
              <path
                d="M13.9287 2H10.0713L2 10.0713L3.92873 12L12 3.92873L20.0713 12L12 20.0713L3.92873 12L2 13.9287L10.0713 22H13.9287L22 13.9287V10.0713L13.9287 2Z"
                fill="#F2994A"
              />
              <path
                d="M13.364 6.54541H10.6367V13.3636H13.364V6.54541Z"
                fill="#F2994A"
              />
              <path
                d="M13.364 14.7273H10.6367V17.4546H13.364V14.7273Z"
                fill="#F2994A"
              />
            </svg>
            {alert.toString().padStart(2, '0')}
            <svg width="8" height="11">
              <path
                d="M1.75361 10.7359L0 9L3.66923 5.36793L0 1.73585L1.75361 0L7.1758 5.36793L1.75361 10.7359Z"
                fill="var(--colors-orange900)"
              />
            </svg>
          </CardInfoCheckAlert>
        ) : (
          <svg width="8" height="11">
            <path
              d="M1.75361 10.7359L0 9L3.66923 5.36793L0 1.73585L1.75361 0L7.1758 5.36793L1.75361 10.7359Z"
              fill="#4DA977"
            />
          </svg>
        )}
      </CardInfoCheckContainerPhoto>
      <CardInfoCheckText>
        <CardInfoCheckCode>{code}</CardInfoCheckCode>
        <h3>{name}</h3>
        <small>{email}</small>
        <h4>{date}</h4>
        <strong>{typeCheck}</strong>
        <Badge size="md" variant={alert > 0 ? 'warning' : 'success'}>
          32 % completed
        </Badge>
      </CardInfoCheckText>
    </CardInfoCheckContainer>
  )
}

CardInfoCheck.displayName = 'CardInfoCheck'
