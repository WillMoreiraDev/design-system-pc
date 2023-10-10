import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Label, TextInputContainer } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label: string
  error: boolean
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, error, ...props }: TextInputProps, ref) => {
    function handleVerifyValue(value: string, elem: HTMLElement) {
      if (value.length >= 3) {
        elem.classList.add('is-valid')
      } else {
        elem.classList.remove('is-valid')
      }
    }
    return (
      <TextInputContainer state={error ? 'error' : 'default'}>
        <Label>{label}</Label>
        <Input
          {...props}
          ref={ref}
          onBlur={({ target }) => handleVerifyValue(target.value, target)}
        />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
