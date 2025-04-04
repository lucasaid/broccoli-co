interface RequestInvite {
  name: string;
  email?: string;
}

export const requestInvite = async ({ name, email }: RequestInvite) => {
  const response = await fetch(
    "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errorMessage);
  }

  return response.json();
};
