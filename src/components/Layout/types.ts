import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export interface NavLinkObj {
  to: string,
  linkName: string
}

export interface UserTextInterface {
  user: string | undefined,
  error: string | undefined,
  isLoading: boolean,
  getUser: () => void
}