import type { StoryObj, Meta } from '@storybook/react'

import { TextAreaComponent, TextAreaProps } from '@peoplecheck-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextAreaComponent,
  args: {
    label: 'Comments',
    error: false,
  },
} as Meta<TextAreaProps>

export const Base: StoryObj<TextAreaProps> = {}

export const Error: StoryObj<TextAreaProps> = {
  args: {
    error: true,
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    value:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusamus rem delectus unde, nisi voluptatibus error nam ratione ipsa vel? Dolores beatae voluptate libero eius reprehenderit est amet culpa maxime?',
  },
}
