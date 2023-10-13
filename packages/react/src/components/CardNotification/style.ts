import { styled } from '../../styles'

export const CardNotificationContainer = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  padding: '$6',
  border: '1px solid $gray200',
  maxWidth: '250px',
  fontFamily: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$white',
  cursor: 'pointer',
  transition: 'all .3s ease',
  '& > div': {
    flex: 1,
    small: {
      color: '$gray800',
      fontSize: '11px',
      letterSpacing: '0.44px',
    },
    h4: {
      margin: '$2 0',
      color: '$black',
      fontSize: '$md',
      fontWeight: '$bold',
      letterSpacing: '0.64px',
    },
    strong: {
      display: 'block',
      marginBottom: '$4',
      fontWeight: '$regular',
      color: '$gray800',
    },
  },
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 30px',
  },
})
