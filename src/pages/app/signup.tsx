import Box from "@mui/material/Box"
import { AppLayout } from "@tech/layouts/app-layout"
import { SignUpForm } from "@tech/modules/login/components/signup-form";

const SignUp = () => {
  return (
    <AppLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <SignUpForm />
      </Box>
    </AppLayout>
  )
}

export default SignUp;