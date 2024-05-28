import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react";
import { SignUpSchemaType, signupSchema } from "./schema";
import { useSnackbar } from "@tech/components/snackbar";
import { useCustomSession } from "@tech/hooks/use-session";
import { axiosApiInstance } from "@tech/lib/axios";

export const useSignUp = () => {
  const { openSnackbar } = useSnackbar();
  const { session }  = useCustomSession();

  const methods = useForm({
    resolver: zodResolver(signupSchema)
  });


  const onSubmit = async (data: SignUpSchemaType) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      isSignup: true,
      redirect: false
    })

    console.log(session)

    // try {
    //   await axiosApiInstance.post('/user', {
    //     email: data.email,
    //     type: data.type,
    //     firebaseId: session?.user?.id
    //   })
    // }
    // catch (err) {
    //   console.log(err)
    // }
  }

  const googleSignIn = async () => {
    const type = methods.watch('type');

    if (!type) {
      openSnackbar({
        message: 'Selecione o tipo de cadastro',
        type: 'error'
      });
      return;
    }

    const result = await signIn('google', { redirect: false });
  
    if (result?.error) {
      console.error('Sign-in error:', result.error);
    } else {
      // Handle successful sign-in here
      console.log('Sign-in successful', result);
    }



    // try {
    //   await axiosApiInstance.post('/user', {
    //     email: session?.user?.email,
    //     type: type,
    //     firebaseId: session?.user?.id
    //   })
    // }
    // catch (err) {
    //   console.log(err)
    // }
  }

  return {
    formMethods: methods,
    onSubmit,
    googleSignIn
  }
}