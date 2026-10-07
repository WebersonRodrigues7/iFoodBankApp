import { LoginType } from "@/types/loginType";
import { fetch } from "expo/fetch";

export async function signIn({ cpf, password }: LoginType) {
  try {
    const response = await fetch("http://10.0.2.2:3000/auth/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ cpf, password }),
    });

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    const meResponse = await fetch("http://10.0.2.2:3000/auth/me", {
      credentials: "include",
    });

    await meResponse.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
