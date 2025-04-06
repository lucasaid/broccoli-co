import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Form } from ".";

describe("Form", () => {
  const submitForm = vi.fn(e => e.preventDefault());
  test("renders children", () => {
    render(
      <Form apiError={null} submitForm={() => Promise.resolve()}>
        <label>Request Form</label>
      </Form>
    );
    expect(screen.getByText("Request Form")).toBeDefined();
  });

  test("calls submitForm when form is submitted", async () => {
    render(
      <Form apiError={null} submitForm={submitForm}>
        <label>Request Form</label>
      </Form>
    );
    fireEvent.click(screen.getByRole("button", { name: "Request" }));
    expect(submitForm).toHaveBeenCalledTimes(1);
  });

  test("renders apiError", () => {
    render(
      <Form submitForm={submitForm} apiError="This is an error">
        <label>Request Form</label>
      </Form>
    );
    expect(screen.getByText("This is an error")).toBeDefined();
  });
});
