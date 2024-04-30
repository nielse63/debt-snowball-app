export type BlurEvent = React.FocusEvent<HTMLInputElement>;

export interface TextInputProps {
  defaultValue: string;
  column: string;
  record: AccountItem;
}

export interface NumberInputProps extends TextInputProps {
  defaultValue: number;
  options?: object;
}

export interface InputProps extends NumberInputProps {
  defaultValue: string | number;
}

export interface DeleteButtonProps {
  title: string;
  id: string;
}
