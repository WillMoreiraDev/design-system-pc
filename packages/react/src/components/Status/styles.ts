import { styled } from '../../styles'

export const StatusContainer = styled('div', {
  width: 252,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$4 0',
  span: {
    color: '$gray800',
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
  variants: {
    variant: {
      default: {
        backgroundColor: '$gray300',
        svg: {
          path: {
            fill: '$gray800',
          },
        },
      },
      success: {
        backgroundColor: '$green100',
        svg: {
          path: {
            fill: '$gray800',
          },
        },
      },
      warning: {
        backgroundColor: '$orange200',
        svg: {
          path: {
            fill: '$orange900',
          },
        },
        span: {
          color: '$orange900',
        },
      },
      danger: {
        backgroundColor: '$red200',
        svg: {
          path: {
            fill: '$red800',
          },
        },
        span: {
          color: '$red800',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
