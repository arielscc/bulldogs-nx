import { render } from '@testing-library/react';
import React from 'react';

import Product from './product';

describe('Product', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Product />);
    expect(baseElement).toBeTruthy();
  });
});
