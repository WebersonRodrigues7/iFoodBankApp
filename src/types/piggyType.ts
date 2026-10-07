import z from "zod";

export const schemaPiggy = z.object({
  name: z.string(),
  amount: z.number(),
});

export type PiggyType = z.infer<typeof schemaPiggy>;
