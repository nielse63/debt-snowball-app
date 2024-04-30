declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "classname";

interface Action {
  type: string;
  payload: any;
}

interface AccountItem {
  name: string;
  balance: number;
  interest: number;
  minPayment: number;
  key?: string;
}

interface CleanAccountItem {
  name: string;
  balance: number;
  interest: number;
  minPayment: number;
}

interface AccountsTableRowProps {
  account: AccountItem;
  index: number;
}

interface AccountsTableProps {
  items: AccountsTableRowProps.item[];
  additionalPayment: number;
}

interface PaymentObject {
  accruedInterest: number;
  additionalPayment: number;
  balanceEnd: number;
  name: string;
  paymentAmount: number;
  balanceStart: number;
  [key: string]: any;
}

interface ResultsObject {
  balance: number;
  accounts: PaymentObject[];
}

interface ErrorObject {
  message: string;
  source?: string;
  id: string;
}

interface State {
  additionalPayment: number;
  accounts: AccountItem[];
  results: ResultsObject[];
  dateEnd: Date;
  errors: ErrorObject[];
  totalInterest: number;
  interestSaved: number;
}

interface ComponentProps {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: React.JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
}
