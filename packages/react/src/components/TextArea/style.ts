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

export const TextArea = styled('textarea', {
  all: 'unset',
  flex: 1,
  width: '100%',
  paddingTop: '$3',
  paddingBottom: '$4',
  fontSize: '$md',
  fontWeight: '$bold',
  letterSspacing: '0.64px',
  color: '$black',
  transition: 'all .3s ease',
})

export const TextAreaContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$white',
  padding: '0 $6',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  boxSizing: 'border-box',
  minHeight: 150,
  fontFamily: '$default',
  '&:has(textarea:focus)': {
    label: {
      top: 7,
      fontSize: '$xs',
    },
    textarea: {
      marginTop: '$5',
    },
  },
  '&:has(textarea:disabled)': {
    border: '1px solid $gray300',
    cursor: 'not-allowed',
    label: {
      top: 7,
      fontSize: '$xs',
      color: '$gray400',
    },
    textarea: {
      marginTop: '$5',
    },
  },
  '&:has(textarea.is-valid)': {
    label: {
      top: 7,
      fontSize: '$xs',
    },
    textarea: {
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
