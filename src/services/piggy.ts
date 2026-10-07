interface createPiggyI {
  name: string;
  amount: number;
}

export async function createPiggy({ name, amount }: createPiggyI) {
  const response = await fetch("http://10.0.2.2:3000/piggy/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, amount }),
  });

  return await response.json();
}


