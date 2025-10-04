import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '@/components/layout/header'

const meta: Meta<typeof Header> = {
  component: Header
}

export default meta

export const Default: StoryObj<typeof Header> = {
  render: () => {
    return <Header />
  }
}
