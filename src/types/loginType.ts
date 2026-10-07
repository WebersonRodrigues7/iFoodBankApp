import z from "zod"

export const loginSchema = z.object({
    cpf: z.string("Email inválido!").min(11).max(11),
    password: z.string()
})

export type LoginType = z.infer<typeof loginSchema>