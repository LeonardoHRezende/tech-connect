import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react";
import { SignUpSchemaType, signupSchema } from "./schema";

export const useSignUp = () => {
  const methods = useForm({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      isSignup: true,
      callbackUrl: '/app'
    })

    console.log(res)
  }

  const googleSignIn = async () => {
    const res = await signIn('google', { callbackUrl: '/app' })

    console.log(res)
  }

  return {
    formMethods: methods,
    onSubmit,
    googleSignIn
  }
}