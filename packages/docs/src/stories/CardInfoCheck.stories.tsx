import type { StoryObj, Meta } from '@storybook/react'

import { CardInfoCheck, CardInfoCheckProps } from '@peoplecheck-ui/react'

export default {
  title: 'Cards/Card Information Check',
  component: CardInfoCheck,
  args: {
    image: 'https://github.com/willmoreiradev.png',
    code: '#000198',
    name: 'William Moreira',
    email: 'willmoreiradev@gmail.com',
    date: '24 December 2021',
    typeCheck: 'Fit and Proper Check',
  },
} as Meta<CardInfoCheckProps>

export const Base: StoryObj<CardInfoCheckProps> = {}

export const WithAlert: StoryObj<CardInfoCheckProps> = {
  args: {
    alert: 2,
  },
}
