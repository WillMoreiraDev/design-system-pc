import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  variants: {
    size: {
      xs: {
        width: '34px',
        height: '34px',
        span: {
          fontSize: '$xs',
        },
      },
      sm: {
        width: '110px',
        height: '110px',
        span: {
          fontSize: '$6xl',
        },
      },
      md: {
        width: '150px',
        height: '150px',
        span: {
          fontSize: '$7xl',
        },
      },
      lg: {
        width: '200px',
        height: '200px',
        span: {
          fontSize: '$9xl',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$green900',
  color: '$white',
  fontSize: '$7xl',
  fontWeight: '$bold',
})
