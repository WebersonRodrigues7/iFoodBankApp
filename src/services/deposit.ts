export async function Deposit(amount: number) {
  const response = await fetch("http://10.0.2.2:3000/wallet/deposit", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) return;
  
  return await response.json();
}
