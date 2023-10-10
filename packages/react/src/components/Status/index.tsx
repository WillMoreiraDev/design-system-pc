import { ComponentProps } from 'react'

import SVG from 'react-inlinesvg'

import { StatusContainer } from './styles'

export interface StatusProps extends ComponentProps<typeof StatusContainer> {
  label: string
  icon: string
}

export function Status({ label, icon, ...props }: StatusProps) {
  return (
    <StatusContainer {...props}>
      <SVG src={icon} height="auto" />
      <span>{label}</span>
    </StatusContainer>
  )
}
