import type { Meta, StoryObj } from '@storybook/react';
import { StoreMerchandise } from './store-merchandise';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof StoreMerchandise> = {
  component: StoreMerchandise,
  title: 'StoreMerchandise',
};
export default meta;
type Story = StoryObj<typeof StoreMerchandise>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to StoreMerchandise!/gi)).toBeTruthy();
  },
};
