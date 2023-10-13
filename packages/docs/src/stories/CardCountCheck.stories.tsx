import type { StoryObj, Meta } from '@storybook/react'

import { CardCountCheck, CardCountCheckProps } from '@peoplecheck-ui/react'

import IconRequested from '../assets/icon-requested.svg'
import IconInProgress from '../assets/icon-inprogress.svg'
import IconCompleted from '../assets/icon-completed.svg'

export default {
  title: 'Cards/Card Count Check',
  component: CardCountCheck,
  args: {
    hasActive: false,
  },
} as Meta<CardCountCheckProps>

export const Requested: StoryObj<CardCountCheckProps> = {
  args: {
    count: 7,
    name: 'Requested',
    icon: IconRequested,
  },
}

export const InProgress: StoryObj<CardCountCheckProps> = {
  args: {
    count: 102,
    name: 'In Progress',
    icon: IconInProgress,
  },
}

export const Completed: StoryObj<CardCountCheckProps> = {
  args: {
    count: 432,
    name: 'Completed',
    icon: IconCompleted,
  },
}

export const Actived: StoryObj<CardCountCheckProps> = {
  args: {
    count: 432,
    name: 'Completed',
    icon: IconCompleted,
    hasActive: true,
  },
}
