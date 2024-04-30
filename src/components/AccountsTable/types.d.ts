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

export interface DeleteButtonProps {
  title: string;
  id: string;
}
