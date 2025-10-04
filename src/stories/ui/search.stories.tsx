import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn } from 'storybook/test'
import { Search } from '@/components/ui/search'

const meta: Meta<typeof Search> = {
  component: Search
}

export default meta

export const Default: StoryObj<typeof Search> = {
  args: {
    topics: ['css', 'javascript', 'python', 'ai'],
    onSearch: fn()
  },
  render: (args) => {
    return <Search {...args} />
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId('search')).toBeVisible()
    await expect(canvas.getByTestId('topics')).toBeVisible()
  }
}

export const NoTopics: StoryObj<typeof Search> = {
  args: {
    topics: [],
    onSearch: fn()
  },
  render: (args) => {
    return <Search {...args} />
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId('search')).toBeVisible()
    await expect(canvas.queryByTestId('topics')).not.toBeInTheDocument()
  }
}

export const Interaction: StoryObj<typeof Search> = {
  args: {
    topics: ['css', 'javascript', 'python', 'ai'],
    onSearch: fn()
  },
  render: (args) => {
    return <Search {...args} />
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByTestId('search')).toBeVisible()
    await expect(canvas.getByTestId('topics')).toBeVisible()

    await userEvent.type(canvas.getByTestId('search'), 'react')
    await userEvent.click(canvas.getByTestId('button'))

    await userEvent.click(canvas.getAllByTestId('topic-button')[0])
  }
}
