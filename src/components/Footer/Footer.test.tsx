import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./";

describe("Footer", () => {
  test("Should render footer", () => {
    render(<Footer />);
    expect(screen.getByText(/Made with ♥ in Melbourne/i)).toBeDefined();
  });

  test("Should match snapshot", () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});