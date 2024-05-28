import { SessionStore, useSessionStore } from "@tech/context/session";
import { axiosApiInstance } from "@tech/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


export const useCustomSession = () => {
  const { data: nextAuthSession, status } = useSession();
  const { session, setSession, setRole }: SessionStore = useSessionStore();

  useEffect(() => {

    if (nextAuthSession && status === "authenticated") {
      const fetchSession = async () => {
        // const newSession = await axiosApiInstance.get(`/user/${nextAuthSession.user.id}`);

        // console.log('newSession', newSession.data);
      }

      fetchSession();
      setSession({
        user: {
          id: nextAuthSession.user.id,
          email: nextAuthSession.user.email,
          name: nextAuthSession.user.name,
          image: nextAuthSession.user.image,
        },

      })
    }
  }, [nextAuthSession]);
  
  return {
    session,
    setSession,
    setRole,
  };
};
