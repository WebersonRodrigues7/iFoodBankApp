import z from "zod";

export const schemaDeposit = z.object({
  amount: z.number(),
});

export type DepositType = z.infer<typeof schemaDeposit>;
