import { ChangeEvent } from "react";

export interface InputProps {
  placeholder?: string,
  name: string,
  value?: string | number,
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'checkbox',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  id?: string,
  search?: boolean,
  error?: string,
  checked?: boolean
}