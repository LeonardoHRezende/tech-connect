import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react";
import { SignUpSchemaType, signupSchema } from "./schema";
import { useSnackbar } from "@tech/components/snackbar";

export const useSignUp = () => {
  const {closeSnackbar, openSnackbar} = useSnackbar();

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
    const type = methods.watch('type');

    if(!type) {
      openSnackbar({
        message: 'Selecione o tipo de cadastro',
        type: 'error'
      });
      return;
    }

    const res = await signIn('google', { callbackUrl: '/app' })

    console.log(res)

  }

  return {
    formMethods: methods,
    onSubmit,
    googleSignIn
  }
}