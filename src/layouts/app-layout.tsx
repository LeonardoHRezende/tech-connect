import { Navbar } from "@tech/components/navbar";
import Container from "@mui/material/Container";
import { useThemeStore } from "@tech/context";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {

  const { themeMode }: { themeMode: string } = useThemeStore();

  return (
    <div style={{ backgroundColor: themeMode === 'light' ? '#f6f6f6' : '#0f1214', height: '100vh' }}>
      <Navbar theme={themeMode} />
      <Container>
        {children}
      </Container>
    </div>
  )
}