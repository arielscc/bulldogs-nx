import type { Meta, StoryObj } from '@storybook/react';
import { StoreMerchandise } from './store-merchandise';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof StoreMerchandise> = {
  component: StoreMerchandise,
  title: 'Store/Merchandise',
};
export default meta;
type Story = StoryObj<typeof StoreMerchandise>;

export const PrimaryButton: Story = {
  args: {
    title: 'Primary Button',
    active: true,
  },
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to StoreMerchandise!/gi)).toBeTruthy();
  },
};

export const Avatar: Story = {
  args: {
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/37073999?v=4',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to StoreMerchandise!/gi)).toBeTruthy();
  },
};
