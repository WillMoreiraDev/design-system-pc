import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$default',
  fontWeight: '$bold',
  letterSpacing: '0.64px',
  lineHeight: '140%',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '$md',
  transition: 'all .3s ease-in',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  svg: {
    width: '$5',
    height: '$5',
    path: {
      transition: 'fill .3s ease-in',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$green900',
        color: '$white',
        svg: {
          path: {
            fill: '$white',
          },
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$green800',
        },
      },
      secondary: {
        backgroundColor: '$gray200',
        color: '$gray800',
        svg: {
          path: {
            fill: '$gray800',
          },
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$gray300',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid $green900',
        color: '$green900',
        svg: {
          path: {
            fill: '$green900',
          },
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$green900',
          color: '$white',
          svg: {
            path: {
              fill: '$white',
            },
          },
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$green900',
        padding: 0,
        svg: {
          path: {
            fill: '$green900',
          },
        },
        '&:not(:disabled):hover': {
          color: '$gray800',
          svg: {
            path: {
              fill: '$gray800',
            },
          },
        },
      },
    },
    size: {
      lg: {
        padding: '0 $7',
        height: 54,
      },
      md: {
        padding: '0 $7',
        height: 42,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
