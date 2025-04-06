import { RequestInvite } from "../types/common";

/**
 * Sends a POST request to the server to request an invite.
 *
 * @param {RequestInvite} param0 - An object containing the name and email for the invite request.
 * @param {AbortSignal} [signal] - An optional AbortSignal to cancel the request.
 * @returns {Promise<any>} The response data from the server if the request is successful.
 * @throws {Error} Throws an error if the request fails with a message from the server.
 */

export const requestInvite = async (
  { name, email }: RequestInvite,
  signal?: AbortSignal
): Promise<any> => {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  const response = await fetch(
    "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
      signal,
    }
  );

  if (!response.ok) {
    const error = await response.json();
    if (!error || !error.errorMessage) {
      throw new Error("Unknown error");
    }
    throw new Error(error.errorMessage);
  }

  return response.json();
};
