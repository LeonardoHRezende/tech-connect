import Image from "next/image"


import { Card } from "@tech/components/card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { InputText } from "@tech/components/input"
import Button from "@tech/components/button"
import { Divider } from "@mui/material"
import { FcGoogle } from "react-icons/fc"


export const LoginForm = () => {
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
          <form>
            <Stack gap={2}>
              <InputText
                label="E-mail"
                placeholder="Digite seu e-mail"
              />
              <InputText
                placeholder="Digite sua senha"
                label="Senha"
                type="password"
              />

              <Button
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
                variant="outlined"
                endIcon={
                  <FcGoogle />
                }
              >
                Continue com o Google
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Stack>
  )
}