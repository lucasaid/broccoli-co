import { render,screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import FormField from ".";
import { UseFormRegister } from "react-hook-form";
import {FormData} from "../../types/forms";


describe("FormField", () => {
  const placeholder = "Name";
  const mockRegister = vi.fn() as UseFormRegister<FormData>;
  test("renders input field with correct attributes", () => {
    render(<FormField name="name" error={undefined} placeholder={placeholder} register={mockRegister} type="text" />);
    expect(mockRegister).toHaveBeenCalledTimes(1);
    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });
  test("renders error message when error is provided", () => {
    const message = "This is required";
    render(<FormField name="name" error={{message, type: "required"}} placeholder={placeholder} register={mockRegister} type="text" />);
    expect(screen.getByText(message)).toBeDefined();
  });
});