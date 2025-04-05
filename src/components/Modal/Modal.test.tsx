import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Modal from './Modal'
import userEvent from '@testing-library/user-event'

describe('Modal component', () => {
  test('renders children', () => {
    render(<Modal isOpen closeModal={() => {}}>Modal content</Modal>)
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  test('calls closeModal when Overlay is clicked', async () => {
    const closeModal = vi.fn()
    render(<Modal isOpen closeModal={closeModal}>Modal content</Modal>)
    const overlay = screen.getByRole('presentation')
    await userEvent.click(overlay)
    expect(closeModal).toHaveBeenCalledTimes(1)
  })
})
