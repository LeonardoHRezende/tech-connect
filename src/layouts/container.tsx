import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const LayoutContainer = ({ children }: any) => {
  return (
    <Box
      height="100vh"
      width="100%"
    >
      <Container>
        {children}
      </Container>
    </Box>
  )
}