import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarContainer> {
  sourceImg: string
  altImg: string
}

export function Avatar({ sourceImg, altImg, ...props }: AvatarProps) {
  return (
    <AvatarContainer {...props}>
      <AvatarImage src={sourceImg} alt={altImg} />

      <AvatarFallback delayMs={600}>RB</AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
