import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator, CheckboxLabel } from './styles'

import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  label: string
  id: string
  error?: boolean
}

export function Checkbox({ label, id, error, ...props }: CheckboxProps) {
  return (
    <CheckboxLabel htmlFor={id} state={error ? 'error' : 'default'}>
      <CheckboxContainer {...props} id={id}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxContainer>
      {label}
    </CheckboxLabel>
  )
}

Checkbox.displayName = 'Checkbox'
