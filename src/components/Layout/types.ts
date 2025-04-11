import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export interface NavLinkObj {
  to: string,
  linkName: string
}

export interface JokeTextInterface {
  joke: string | undefined,
  error: string | undefined,
  isLoading: boolean,
  getJoke: () => void
}