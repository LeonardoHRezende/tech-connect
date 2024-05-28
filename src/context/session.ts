import { create } from "zustand";

interface Session {
  user: {
    id: string;
    email: string;
    name: string;
    image: string;
  }
  role?: string;
}

export interface SessionStore {
  session: Session;
  setSession: (session: Session) => void;
  setRole: (role: string) => void;
}


export const useSessionStore = create<SessionStore>((set) => ({
  session: {
    user: null,
    role: '',
    id: ''
  },
  setSession: (session) => set((state) => ({ ...state, session })),
  setRole: (role) => set((state) => ({ session: { ...state.session, role } }))
}));
