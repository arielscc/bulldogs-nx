import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './product';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Product> = {
  component: Product,
  title: 'Store/Product',
};
export default meta;
type Story = StoryObj<typeof Product>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Product!/gi)).toBeTruthy();
  },
};
