import Image from "next/image"
import Link from "next/link"


import { Card } from "@tech/components/card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { InputTextHookForm, SelectHookForm } from "@tech/components/input"
import Button from "@tech/components/button"
import { Divider } from "@mui/material"
import { FcGoogle } from "react-icons/fc"
import { APP_ROUTES } from "@tech/constants/routes"
import { useSignUp } from "./hook"
import { FormProvider } from "react-hook-form"

export const SignUpForm = () => {

  const { formMethods, googleSignIn, onSubmit } = useSignUp();

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
          </Stack>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit((data) => onSubmit(data))}>
              <Stack gap={2}>
                <SelectHookForm
                  name="type"
                  label="O que você procura?"
                  placeholder='Selecione uma opção'
                  options={[
                    { label: 'Estou procurando novas oportunidades', value: 'COMMON' },
                    { label: 'Quero encontrar novos talentos', value: 'RECRUITER' },
                    { label: 'Quero cadastrar minha empresa', value: 'COMPANY' }
                  ]}
                />
                <InputTextHookForm
                  name="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                />
                <Stack>
                  <InputTextHookForm
                    name="password"
                    placeholder="Digite sua senha"
                    label="Senha"
                    type="password"
                  />
                  <Typography variant="caption" sx={{ opacity: 0.5 }}>*A senha deve conter no mínimo 8 caracteres, incluindo letras, números e caracteres especiais.</Typography>
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                >
                  Cadastrar agora
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
      </Card >
      <Typography variant="body2" textAlign="center">
        Já tem uma conta? <Link style={{ fontWeight: 700, textDecoration: 'none' }} href={APP_ROUTES.LOGIN}>Faça o login!</Link>
      </Typography>
    </Stack>
  )
}