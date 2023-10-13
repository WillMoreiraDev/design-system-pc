import { styled } from '../../styles'

export const CardCountCheckContainer = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  width: '100%',
  border: '1px solid $gray200',
  maxWidth: '176px',
  padding: '$6',
  boxSizing: 'border-box',
  fontFamily: '$default',
  backgroundColor: '$white',
  transition: 'all .3s ease',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 30px',
    '& > div': {
      '& > div': {
        svg: {
          path: {
            fill: '$green900',
          },
        },
        h3: {
          color: '$green900',
        },
      },
    },
    span: {
      color: '$green900',
    },
  },
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid $gray200',
    marginBottom: '$4',
    paddingBottom: '$4',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',
      svg: {
        path: {
          transition: 'fill .3s ease',
        },
      },
      h3: {
        color: '$black',
        fontSize: '$3xl',
        margin: 0,
        transition: 'color .3s ease',
      },
    },
  },
  span: {
    letterSpacing: '0.64px',
    fontSize: '$md',
    color: '$gray800',
    transition: 'color .3s ease',
  },
  variants: {
    state: {
      default: {
        '& > div': {
          '& > div': {
            h3: {
              color: '$black',
            },
          },
        },
        span: {
          color: '$gray800',
        },
      },
      active: {
        '& > div': {
          '& > div': {
            svg: {
              path: {
                fill: '$green900',
              },
            },
            h3: {
              color: '$green900',
            },
          },
        },
        span: {
          color: '$green900',
        },
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
})
