import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@peoplecheck-ui/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    sourceImg: 'https://github.com/willmoreiradev.png',
    altImg: 'William Moreira',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'inline-radio',
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithoutPhoto: StoryObj<AvatarProps> = {
  args: {
    sourceImg: undefined,
  },
}
