import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { SignUp } from ".";
import { requestInvite } from "../../services/api";

vi.mock("../../services/api");

describe("SignUp component", () => {
  const closeModal = vi.fn();
  const name = "John Doe";
  const email = "john@example.com";

  const fillForm = () => {
    fireEvent.input(screen.getByPlaceholderText("Full Name"), { target: { value: name } });
    fireEvent.input(screen.getByPlaceholderText("Email"), { target: { value: email } });
    fireEvent.input(screen.getByPlaceholderText("Confirm Email"), { target: { value: email } });
  }
  const clickSubmit = () => {
    fireEvent.click(screen.getByRole("button", { name: "Request" }));
  }

  beforeEach(() => {
    closeModal.mockClear();
    render(<SignUp isOpen closeModal={closeModal} />);
  });

  test("renders the form fields", () => {
    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Email")).toBeInTheDocument();
  });

  test("displays validation errors on submit with empty fields", async () => {
    clickSubmit();
    await waitFor(() => {
      expect(screen.getByText("Email is required.")).toBeInTheDocument();
      expect(screen.getByText("Full name is required.")).toBeInTheDocument();
      expect(screen.getByText("Confirm Email is required.")).toBeInTheDocument();
    });
  });

  test("displays validation errors on submit with invalid email", async () => {
    fireEvent.input(screen.getByPlaceholderText("Email"), { target: { value: "invalid-email" } });
    clickSubmit();
    await waitFor(() => {
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });
  });

  test("displays validation errors on submit with mismatched emails", async () => {
    fireEvent.input(screen.getByPlaceholderText("Email"), { target: { value: email } });
    fireEvent.input(screen.getByPlaceholderText("Confirm Email"), { target: { value: "test@example.com" } });
    clickSubmit();
    await waitFor(() => {
      expect(screen.getByText("Emails do not match")).toBeInTheDocument();
    });
  });

  test("submits form successfully", async () => {
    (requestInvite as Mock).mockResolvedValueOnce("Registered");
    fillForm();
    clickSubmit();

    await waitFor(() => {
      expect(requestInvite).toHaveBeenCalledWith(
        { name, email },
        expect.anything()
      );
      expect(screen.getByText("All Done!")).toBeInTheDocument();
    });
  });

  test("handles API error", async () => {
    (requestInvite as Mock).mockRejectedValueOnce(new Error("Something went wrong"));
    fillForm();
    clickSubmit();

    await waitFor(() => {
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });
  });
});

