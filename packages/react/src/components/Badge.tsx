import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Badge = styled('span', {
  display: 'inline-block',
  textAlign: 'center',
  minWidth: 144,
  padding: '10px',
  fontFamily: '$default',
  lineHeight: '$shorter',
  fontWeight: '$bold',
  color: '$gray800',
  letterSpacing: '0.48px',
  variants: {
    variant: {
      success: {
        backgroundColor: '$green300',
      },
      warning: {
        color: '$orange900',
        backgroundColor: '$orange100',
      },
      danger: {
        color: '$red900',
        backgroundColor: '$red100',
      },
      default: {
        color: '$gray800',
        backgroundColor: '$gray300',
      },
    },
    size: {
      xs: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$sm',
      },
      lg: {
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface BadgeProps extends ComponentProps<typeof Badge> {
  as?: ElementType
}

Badge.displayName = 'Badge'
