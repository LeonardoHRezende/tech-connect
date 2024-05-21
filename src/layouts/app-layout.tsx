import { Navbar } from "@tech/components/navbar";

import { LayoutContainer } from "./container";
import { useTheme } from "@tech/hooks/use-theme";


export const AppLayout = ({ children }: any) => {

  const { themeMode, toggleTheme} = useTheme();

  return (
    <div>
      <Navbar theme={themeMode} changeTheme={toggleTheme} />
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </div>
  )
}