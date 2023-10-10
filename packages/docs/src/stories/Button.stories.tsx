import type { StoryObj, Meta } from '@storybook/react'

import SVG from 'react-inlinesvg'

import { Button, ButtonProps } from '@peoplecheck-ui/react'

import IconSend from '../assets/icon-send.svg'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Request a Check',
    variant: 'primary',
    size: 'lg',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost'],
      control: 'inline-radio',
    },
    size: {
      options: ['lg', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <SVG src={IconSend} height="auto" title="React" />
        Request a Check
      </>
    ),
  },
}
