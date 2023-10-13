import type { StoryObj, Meta } from '@storybook/react'

import { CardNotification, CardNotificationProps } from '@peoplecheck-ui/react'

export default {
  title: 'Cards/Card Notification',
  component: CardNotification,
  args: {
    code: '000198',
    name: 'Anna Smith',
    date: '24 December 2021',
    status: 'warning',
    labelStatus: 'Completed with alert',
  },
} as Meta<CardNotificationProps>

export const Success: StoryObj<CardNotificationProps> = {
  args: {
    status: 'success',
    labelStatus: 'Completed',
  },
}

export const Warning: StoryObj<CardNotificationProps> = {
  args: {
    status: 'warning',
    labelStatus: 'Completed with alert',
  },
}

export const Purged: StoryObj<CardNotificationProps> = {
  args: {
    status: 'default',
    labelStatus: 'Purged',
  },
}

export const Danger: StoryObj<CardNotificationProps> = {
  args: {
    status: 'danger',
    labelStatus: 'Cancelled',
  },
}
