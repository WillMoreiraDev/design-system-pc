import type { StoryObj, Meta } from '@storybook/react'

import { Status, StatusProps } from '@peoplecheck-ui/react'

import IconRequested from '../assets/requested.svg'
import IconInprogress from '../assets/in-progress.svg'
import IconCompleted from '../assets/completed.svg'
import IconWarning from '../assets/warning.svg'
import IconDanger from '../assets/danger.svg'
import IconPurged from '../assets/purged.svg'

export default {
  title: 'Components/Status',
  component: Status,
  args: {
    label: 'Requested',
    variant: 'default',
    icon: IconRequested,
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'warning', 'danger'],
      control: 'inline-radio',
    },
  },
} as Meta<StatusProps>

export const Requested: StoryObj<StatusProps> = {}

export const InProgress: StoryObj<StatusProps> = {
  args: {
    label: 'In progress',
    icon: IconInprogress,
  },
}

export const Completed: StoryObj<StatusProps> = {
  args: {
    label: 'Completed',
    variant: 'success',
    icon: IconCompleted,
  },
}

export const CompletedWithAlert: StoryObj<StatusProps> = {
  args: {
    label: 'Completed with alert',
    variant: 'warning',
    icon: IconWarning,
  },
}

export const UnableToVerify: StoryObj<StatusProps> = {
  args: {
    label: 'Unable to verify',
    variant: 'warning',
    icon: IconWarning,
  },
}

export const Cancelled: StoryObj<StatusProps> = {
  args: {
    label: 'Cancelled',
    variant: 'danger',
    icon: IconDanger,
  },
}

export const Purged: StoryObj<StatusProps> = {
  args: {
    label: 'Purged',
    variant: 'default',
    icon: IconPurged,
  },
}
