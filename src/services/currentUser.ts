import { fetch } from "expo/fetch";

export async function getUser() {
  const response = await fetch("http://10.0.2.2:3000/auth/me", {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return null;
  }

  return data;
}
