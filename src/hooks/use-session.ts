import { useSessionStore } from "@tech/context/session";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


export const useCustomSession = () => {
  const { data: nextAuthSession, status } = useSession();
  const { session, setSession, setRole } = useSessionStore();

  useEffect(() => {
    if (nextAuthSession && status === "authenticated") {

    }
  }, [nextAuthSession, status, setSession]);

  return {
    session,
    setSession,
    setRole,
  };
};
