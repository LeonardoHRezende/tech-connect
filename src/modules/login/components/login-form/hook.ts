import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, loginSchema } from "./schema";
import { signIn } from "next-auth/react";

export const useLogin = () => {
  const methods = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: LoginSchema) => {
    signIn('credentials',{
      email: data.email,
      password: data.password,
      callbackUrl: '/app'
    })
  }

  const googleSignIn = () => {
    signIn('google', { callbackUrl: '/app' })
  }

  return{
    formMethods: methods,
    onSubmit,
    googleSignIn
  }
}