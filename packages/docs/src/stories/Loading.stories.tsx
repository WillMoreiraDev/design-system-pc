import type { StoryObj, Meta } from '@storybook/react'

import { Loading, LoadingProps } from '@peoplecheck-ui/react'

export default {
  title: 'Components/Loading',
  component: Loading,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'md', 'lg'],
      control: 'inline-radio',
    },
  },
} as Meta<LoadingProps>

export const Small: StoryObj<LoadingProps> = {
  args: {
    size: 'xs',
  },
}

export const Medium: StoryObj<LoadingProps> = {}

export const Large: StoryObj<LoadingProps> = {
  args: {
    size: 'lg',
  },
}
