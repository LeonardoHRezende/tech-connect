import Box from "@mui/material/Box"
import { AppLayout } from "@tech/layouts/app-layout"
import { LoginForm } from "@tech/modules/login/components/login-form";

const Login = () => {
  return (
    <AppLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <LoginForm />
      </Box>
    </AppLayout>
  )
}

export default Login;