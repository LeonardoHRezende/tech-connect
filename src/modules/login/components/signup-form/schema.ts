import z from 'zod'

export const signupSchema = z.object({
  email: z.string().min(1, { message: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
  password: z.string().min(8, {
    message: "A senha deve conter no mínimo 8 caracteres, incluindo letras maiúsculas e minúsculas, números e caracteres especiais."
  }).regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: "A senha deve conter no mínimo 8 caracteres, incluindo letras maiúsculas e minúsculas, números e caracteres especiais."
  }),
  type: z.string().min(1, { message: 'Tipo é obrigatório' })
});

export type SignUpSchemaType = z.infer<typeof signupSchema>;