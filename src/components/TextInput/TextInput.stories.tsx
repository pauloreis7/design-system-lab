import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextInput, TextInputInputProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput.Input,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  args: {
    placeholder: 'Type your e-mail address'
  }
} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {
  decorators: [
    Story => {
      return <TextInput.Root>{Story()}</TextInput.Root>
    }
  ]
}

export const WithoutIcon: StoryObj<TextInputInputProps> = {
  decorators: [
    Story => {
      return (
        <TextInput.Root>
          <TextInput.Icon key="text-input-icon">
            <Envelope />
          </TextInput.Icon>

          {Story()}
        </TextInput.Root>
      )
    }
  ]
}
