import { Navbar } from "@tech/components/navbar";
import { useThemeStore } from "@tech/context";
import { LayoutContainer } from "./container";

export const AppLayout = ({ children }: any) => {

  const { themeMode }: { themeMode: string } = useThemeStore();

  return (
    <div style={{ backgroundColor: themeMode === 'light' ? '#f6f6f6' : '#0f1214'}}>
      <Navbar theme={themeMode} />
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </div>
  )
}