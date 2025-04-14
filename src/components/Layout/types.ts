import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export interface NavLinkObj {
  to: string,
  linkName: string
}

export interface UserTextInterface {
  user: string | undefined;
  name: string | undefined;
  email: string | undefined;
  error: string | undefined;
  city?: string | undefined;
  country?: string | undefined;
  phone?: string | undefined;
  avatar?: string | undefined;
  isLoading: boolean;
  getUser: () => void;
}