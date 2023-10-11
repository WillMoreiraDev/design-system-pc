import type { StoryObj, Meta } from '@storybook/react'

import { Select, SelectProps } from '@peoplecheck-ui/react'

const countries = [
  {
    id: '1',
    name: 'Afghanistan',
  },
  {
    id: '2',
    name: 'Albania',
  },
  {
    id: '3',
    name: 'Algeria',
  },
  {
    id: '4',
    name: 'Andorra',
  },
  {
    id: '5',
    name: 'Angola',
  },
  {
    id: '6',
    name: 'Antigua and Barbuda',
  },
]

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    label: 'Country of birth',
    error: false,
    options: countries,
  },
} as Meta<SelectProps>

export const Base: StoryObj<SelectProps> = {}

export const WithError: StoryObj<SelectProps> = {
  args: {
    error: true,
  },
}

export const Disabled: StoryObj<SelectProps> = {
  args: {
    disabled: true,
  },
}
