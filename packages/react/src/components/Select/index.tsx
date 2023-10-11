import { ComponentProps, ElementRef, forwardRef, useState } from 'react'

import {
  DropdownSelect,
  InputSelect,
  LabelSelect,
  SelectContainer,
} from './style'

type optionProps = {
  id: string
  name: string
}

export interface SelectProps extends ComponentProps<typeof InputSelect> {
  label: string
  error?: boolean
  options: optionProps[]
}

export const Select = forwardRef<ElementRef<typeof InputSelect>, SelectProps>(
  ({ label, error, options, ...props }: SelectProps) => {
    const [value, setValue] = useState('')
    const [isActive, setIsActive] = useState(false)

    function handleOpenSelect() {
      setIsActive(!isActive)
    }

    function handleSelectedValue(option: string) {
      setValue(option)
      handleOpenSelect()
    }

    return (
      <SelectContainer state={error ? 'error' : 'default'}>
        <button onClick={handleOpenSelect}>
          <LabelSelect state={value !== '' ? 'focus' : 'noFocus'}>
            {label}
          </LabelSelect>
          <InputSelect
            type="text"
            value={value}
            style={{
              paddingTop: value !== '' ? '19px' : '0px',
            }}
            readOnly
            {...props}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#4DA977"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isActive && (
          <DropdownSelect>
            {options.map(({ id, name }) => (
              <button key={id} onClick={() => handleSelectedValue(name)}>
                {name}
              </button>
            ))}
          </DropdownSelect>
        )}
      </SelectContainer>
    )
  },
)

Select.displayName = 'Select'
