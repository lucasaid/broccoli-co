import { describe, vi, test, expect, MockedFunction } from "vitest";
import { requestInvite } from "./api";

const email = "john@example.com";
const alreadyUsedEmail = "usedemail@airwallex.com";
const name = "John Doe";
const successMessage = "Registered";
const missingNameMessage = 'Bad Request: "name" is required';
const missingEmailMessage = 'Bad Request: "email" is required';
const alreadyUsedEmailMessage = "Bad Request: Email is already in use";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(successMessage),
  } as Response);
}) as MockedFunction<typeof fetch>;

describe("api", () => {
  test("requestInvite", async () => {
    const response = await requestInvite({ name, email });
    expect(response).toEqual(successMessage);
  });
  test("return error if name is missing", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ errorMessage: missingNameMessage }),
    } as Response);
    // @ts-expect-error name is required but not provided for test
    const response = async () => await requestInvite({ email });
    await expect(response).rejects.toThrow(missingNameMessage);
  });
  test("return error if email is missing", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ errorMessage: missingEmailMessage }),
    } as Response);
    const response = async () => await requestInvite({ name });
    await expect(response).rejects.toThrow(missingEmailMessage);
  });
  test("return error if email is usedemail@airwallex.com", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ errorMessage: alreadyUsedEmailMessage }),
    } as Response);
    const response = async () =>
      await requestInvite({ name, email: alreadyUsedEmail });
    await expect(response).rejects.toThrow(alreadyUsedEmailMessage);
  });
});
