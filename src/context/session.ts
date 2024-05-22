import { create } from "zustand";

interface Session {
  user: {
    email: string;
    name: string;
    image: string;
  }
  role: string;
}

interface SessionStore {
  session: Session;
  setSession: (session: Session) => void;
  setRole: (role: string) => void;
}


export const useSessionStore = create<SessionStore>((set) => ({
  session: {
    user: null,
    role: ''
  },
  setSession: (session) => set((state) => ({ ...state, session })),
  setRole: (role) => set((state) => ({ session: { ...state.session, role } }))
}));
