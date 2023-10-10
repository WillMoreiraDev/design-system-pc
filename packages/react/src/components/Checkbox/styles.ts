import * as Checkbox from '@radix-ui/react-checkbox'

import { styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$4',
  height: '$4',
  backgroundColor: 'transparent',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $green200',
  color: '$white',
  '&[data-state="checked"]': {
    backgroundColor: '$green800',
    border: '2px solid $green800',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
})

export const CheckboxLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  fontFamily: '$default',
  fontSize: '$md',
  letterSpacing: '0.64px',
  cursor: 'pointer',
  variants: {
    state: {
      default: {
        color: '$gray800',
        [`${CheckboxContainer}`]: {
          border: '2px solid $green200',
        },
      },
      error: {
        color: '$red900',
        [`${CheckboxContainer}`]: {
          border: '2px solid $red900',
        },
      },
    },
  },
})
