import type { StoryObj, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '@peoplecheck-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Accept terms and conditions.',
    id: 'terms',
    error: false,
  },
} as Meta<CheckboxProps>

export const Base: StoryObj<CheckboxProps> = {}

export const Error: StoryObj<CheckboxProps> = {
  args: {
    error: true,
  },
}
