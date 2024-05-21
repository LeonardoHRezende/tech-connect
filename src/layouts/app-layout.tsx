import { Navbar } from "@tech/components/navbar";
import { useThemeStore } from "@tech/context";
import { LayoutContainer } from "./container";

export const AppLayout = ({ children }: any) => {

  const { themeMode }: { themeMode: string } = useThemeStore();

  return (
    <div>
      <Navbar theme={themeMode} />
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </div>
  )
}