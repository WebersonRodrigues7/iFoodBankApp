export async function GetWallet() {
  const response = await fetch("http://10.0.2.2:3000/wallet", {
    credentials: "include",
  });

  return await response.json();
}
