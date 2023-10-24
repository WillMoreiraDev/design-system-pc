import { ComponentProps, ElementType } from 'react'
import { keyframes, styled } from '../styles'

const rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Loading = styled('span', {
  border: '5px solid $gray200',
  borderBottomColor: '$green900',
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: `${rotation} 1s linear infinite`,
  variants: {
    size: {
      xs: {
        width: 32,
        height: 32,
        borderWidth: 3,
      },
      md: {
        width: 48,
        height: 48,
      },
      lg: {
        width: 62,
        height: 62,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface LoadingProps extends ComponentProps<typeof Loading> {
  as?: ElementType
}

Loading.displayName = 'Loading'
