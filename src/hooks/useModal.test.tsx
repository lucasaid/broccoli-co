import { act, renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useModal } from "./useModal";

describe("useModal", () => {
  test("isOpen is false by default", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
  });

  test("openModal sets isOpen to true", async () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);
  });

  test("closeModal sets isOpen to false", async () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });
    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isOpen).toBe(false);
  });

  test("toggleModal toggles isOpen", async () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isOpen).toBe(true);
    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
