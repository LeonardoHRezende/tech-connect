import Image from "next/image"


import { Card } from "@tech/components/card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { InputText, Select } from "@tech/components/input"
import Button from "@tech/components/button"
import { Divider } from "@mui/material"
import { FcGoogle } from "react-icons/fc"

export const SignUpForm = () => {
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
          <form>
            <Stack gap={2}>
              <Select
                label="O que você procura?"
                placeholder='Selecione uma opção'
                options={[
                  { label: 'Estou procurando novas oportunidades', value: 'common' },
                  { label: 'Quero encontrar novos talentos', value: 'recruiter' },
                  { label: 'Quero cadastrar minha empresa', value: 'company' }
                ]}
              />
              <InputText
                label="E-mail"
                placeholder="Digite seu e-mail"
              />
              <Stack>
                <InputText
                  placeholder="Digite sua senha"
                  label="Senha"
                  type="password"
                />
                <Typography variant="caption" sx={{opacity: 0.5}}>*A senha deve conter no mínimo 8 caracteres, incluindo letras, números e caracteres especiais.</Typography>
              </Stack>
              <Button
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
      </Card >
    </Stack>
  )
}