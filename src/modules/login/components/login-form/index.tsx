import Image from "next/image"
import Link from "next/link"

import { Card } from "@tech/components/card"

import { InputText, InputTextHookForm } from "@tech/components/input"
import Button from "@tech/components/button"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Divider } from "@mui/material"
import { FcGoogle } from "react-icons/fc"

import { signIn } from "next-auth/react"

import { APP_ROUTES } from "@tech/constants/routes"
import { useLogin } from "./hook"
import { FormProvider } from "react-hook-form"


export const LoginForm = () => {

  const { formMethods, onSubmit, googleSignIn } = useLogin();

  return (
    <Stack gap={2}>
      <Card
        sx={{
          borderRadius: 1,
          maxWidth: 600
        }}
      >
        <Stack p={4} gap={2}>
          <Stack justifyContent="center" alignItems="center" gap={1}>
            <Image
              src="/images/icon-dark.svg"
              alt="Logo"
              width={50}
              height={50}
            />
            <Typography variant="body2">Acesse com sua conta, ou realize seu cadastro agora mesmo</Typography>
          </Stack>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit((data) => onSubmit(data))}>
              <Stack gap={2}>
                <InputTextHookForm
                  name="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                />
                <InputTextHookForm
                  name="password"
                  placeholder="Digite sua senha"
                  label="Senha"
                  type="password"
                />

                <Button
                  type="submit"
                  variant="contained"
                >
                  Entrar
                </Button>
                <Divider variant="middle" sx={(theme) => ({ borderColor: '#0f121409' })}>
                  <Typography>
                    ou
                  </Typography>
                </Divider>
                <Button
                  onClick={googleSignIn}
                  variant="outlined"
                  endIcon={
                    <FcGoogle />
                  }
                >
                  Continue com o Google
                </Button>
              </Stack>
            </form>
          </FormProvider>
        </Stack>
      </Card>
      <Typography variant="body2" textAlign="center">
        Ainda não tem uma conta? <Link style={{ fontWeight: 700, textDecoration: 'none' }} href={APP_ROUTES.SIGNUP}>Cadastre-se!</Link>
      </Typography>
    </Stack>
  )
}