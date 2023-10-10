import type { StoryObj, Meta } from '@storybook/react'

import { Badge, BadgeProps } from '@peoplecheck-ui/react'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'In progress',
    variant: 'default',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'warning', 'danger'],
      control: 'inline-radio',
    },
    size: {
      options: ['xs', 'md', 'lg'],
      control: 'inline-radio',
    },
  },
} as Meta<BadgeProps>

export const Default: StoryObj<BadgeProps> = {}

export const Success: StoryObj<BadgeProps> = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
}

export const Warning: StoryObj<BadgeProps> = {
  args: {
    children: 'Completed with alert',
    variant: 'warning',
  },
}

export const Danger: StoryObj<BadgeProps> = {
  args: {
    children: 'Cancelled',
    variant: 'danger',
  },
}
