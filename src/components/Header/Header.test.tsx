import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Header from './'

describe('Header', () => {
  test('Should render header name', () => {
    render(<Header />)
    expect(screen.getByText(/Broccoli & Co/i)).toBeDefined()
  })
  test('Should match snapshot', () => {
    const container = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
