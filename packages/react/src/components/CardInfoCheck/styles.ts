import { styled } from '../../styles'

export const CardInfoCheckContainer = styled('button', {
  all: 'unset',
  backgroundColor: '$white',
  border: '1px solid $gray200',
  padding: '$6',
  fontFamily: '$default',
  cursor: 'pointer',
  width: '100%',
  maxWidth: '204px',
  transition: 'all .3s ease',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 30px',
  },
})

export const CardInfoCheckCode = styled('span', {
  color: '$gray800',
  fontFamily: '$default',
  fontSize: '$xs',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  letterSpacing: '0.44px',
})

export const CardInfoCheckContainerPhoto = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CardInfoCheckAlert = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  fontWeight: '$bold',
  fontSize: '$xs',
  lineHeight: '$shorter',
  letterSpacing: '0.02em',
  color: '$orange900',
})

export const CardInfoCheckText = styled('div', {
  marginTop: '$6',
  h3: {
    marginTop: '$2',
    marginBottom: '$4',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  small: {
    display: 'block',
    color: '$black',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$shorter',
    letterSpacing: '0.56px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  h4: {
    marginTop: '$2',
    marginBottom: '$4',
    color: '$gray800',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$shorter',
    letterSpacing: '0.56px',
  },
  strong: {
    display: 'block',
    marginBottom: '$4',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
