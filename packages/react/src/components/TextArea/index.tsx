import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TextArea, Label, TextAreaContainer } from './style'

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  label: string
  error: boolean
}

export const TextAreaComponent = forwardRef<
  ElementRef<typeof TextArea>,
  TextAreaProps
>(({ label, error, ...props }: TextAreaProps, ref) => {
  function handleVerifyValue(value: string, elem: HTMLElement) {
    if (value.length >= 3) {
      elem.classList.add('is-valid')
    } else {
      elem.classList.remove('is-valid')
    }
  }
  return (
    <TextAreaContainer state={error ? 'error' : 'default'}>
      <Label>{label}</Label>
      <TextArea
        {...props}
        ref={ref}
        onBlur={({ target }) => handleVerifyValue(target.value, target)}
      />
    </TextAreaContainer>
  )
})

TextAreaComponent.displayName = 'TextArea'
