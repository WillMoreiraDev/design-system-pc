import type { StoryObj, Meta } from '@storybook/react'

import { TextInput, TextInputProps } from '@peoplecheck-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    label: 'My organisation’s name is...',
    error: false,
  },
} as Meta<TextInputProps>

export const Base: StoryObj<TextInputProps> = {}

export const Error: StoryObj<TextInputProps> = {
  args: {
    error: true,
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    value: 'PeopleCheck',
  },
}
