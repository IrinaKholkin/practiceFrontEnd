export interface ButtonProps {
  name: string,
  //void - если функция ничего не возвращает
  onClick?: () => void,
  disabled?: boolean,
  type?: 'submit' | 'button' | 'reset',
  danger?: boolean
}