import "@testing-library/jest-dom";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("Modal component", () => {
  const modalContent = "Modal content";
  const closeModal = vi.fn();
  beforeEach(() => {
    closeModal.mockClear();
    render(
      <Modal isOpen closeModal={closeModal}>
        {modalContent}
      </Modal>
    );
  })
  test("renders children", () => {
    expect(screen.getByText(modalContent)).toBeInTheDocument();
  });

  test("calls closeModal when close button is clicked", async () => {
    await userEvent.click(screen.getByRole("button"));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  test("calls closeModal when Overlay is clicked", async () => {
    await userEvent.click(screen.getByRole("presentation"));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
