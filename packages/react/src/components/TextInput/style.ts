import { styled } from '../../styles'

export const Label = styled('label', {
  position: 'absolute',
  top: 19,
  color: '$green800',
  fontSize: '$md',
  letterSpacing: '0.64px',
  pointerEvents: 'none',
  transition: 'all .3s ease',
})

export const TextInputContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$white',
  padding: '0 $6',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  height: 56,
  fontFamily: '$default',
  '&:has(input:focus)': {
    label: {
      top: 7,
      fontSize: '$xs',
    },
    input: {
      marginTop: '$5',
    },
  },
  '&:has(input:disabled)': {
    border: '1px solid $gray300',
    cursor: 'not-allowed',
    label: {
      top: 7,
      fontSize: '$xs',
      color: '$gray400',
    },
    input: {
      marginTop: '$5',
    },
  },
  '&:has(input.is-valid)': {
    label: {
      top: 7,
      fontSize: '$xs',
    },
    input: {
      marginTop: '$5',
    },
  },
  variants: {
    state: {
      default: {
        border: '1px solid $green200',
      },
      error: {
        border: '1px solid $red900',
        [`${Label}`]: {
          color: '$red900',
        },
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
})

export const Input = styled('input', {
  all: 'unset',
  flex: 1,
  fontSize: '$md',
  fontWeight: '$bold',
  letterSspacing: '0.64px',
  color: '$black',
  transition: 'all .3s ease',
})
