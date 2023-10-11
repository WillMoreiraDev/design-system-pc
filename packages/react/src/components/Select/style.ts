import { styled } from '../../styles'

export const LabelSelect = styled('label', {
  position: 'absolute',
  fontFamily: '$default',
  lineHeight: '$short',
  letterSpacing: '0.64px',
  pointerEvents: 'none',
  transition: 'all .3s ease',
  variants: {
    state: {
      noFocus: {
        top: 18,
        fontSize: '$md',
      },
      focus: {
        top: 7,
        fontSize: '$xs',
      },
    },
  },
})

export const InputSelect = styled('input', {
  all: 'unset',
  width: '100%',
  color: '$black',
  fontFamily: '$default',
  transition: 'all .3s ease',
})

export const DropdownSelect = styled('div', {
  position: 'absolute',
  left: '0',
  width: '100%',
  borderTop: 'none !important',
  overflowY: 'auto',
  maxHeight: 471,
  boxSizing: 'border-box',
  button: {
    all: 'unset',
    display: 'block',
    width: '100%',
    height: 58,
    backgroundColor: '$gray100',
    padding: '0 23px',
    boxSizing: 'border-box',
    color: '$black',
    fontFamily: '$default',
    fontSize: '$md',
    lineHeight: '$short',
    letterSpacing: '0.64px',
    cursor: 'pointer',
    transition: 'background-color .3s ease',
    '&:hover': {
      backgroundColor: '$green100',
    },
    '&:not(:last-child)': {
      marginBottom: 1,
    },
  },
})

export const SelectContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '382px',
  '&:has(input:disabled)': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    '& > button': {
      border: '1px solid $gray300',
      svg: {
        path: {
          stroke: '$gray400',
        },
      },
      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: 'transparent',
      },
    },
    [`${LabelSelect}`]: {
      color: '$gray400',
    },
  },
  '& > button': {
    all: 'unset',
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    height: '58px',
    padding: '0 23px',
    cursor: 'pointer',
    backgroundColor: '$white',
    transition: 'background-color .3s ease',
    svg: {
      position: 'absolute',
      top: '27px',
      right: '25px',
      transition: 'transform .3s ease',
    },
  },
  variants: {
    state: {
      default: {
        '& > button': {
          border: '1px solid $green800',
          '&:hover': {
            backgroundColor: '$green100',
          },
        },
        [`${LabelSelect}`]: {
          color: '$green800',
        },
        [`${DropdownSelect}`]: {
          border: '1px solid $green800',
        },
      },
      error: {
        '& > button': {
          border: '1px solid $red900',
          '&:hover': {
            backgroundColor: '$red100',
          },
          svg: {
            path: {
              stroke: '$red900',
            },
          },
        },
        [`${LabelSelect}`]: {
          color: '$red900',
        },
        [`${DropdownSelect}`]: {
          border: '1px solid $red900',
        },
      },
    },
  },
})
