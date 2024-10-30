import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { Description, DescriptionType, Subtitle } from '@storybook/blocks';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Components/Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    icons: {
      table: {
        disable: true,
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },

  parameters: {
    docs: {
      description: {
        component: 'This is the documentaion for the shared button component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    label: 'Button Label',
    variant: 'primary',
    size: 'large',
    rounded: 'small',
  },
};
