declare module "*.svg" {
  const content: string;
  export default content;
}

interface Action {
  type: string;
  payload: any;
}

interface AccountItem {
  name: { value: string };
  balance: { value: number };
  interest: { value: number };
  minPayment: { value: number };
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

interface State {
  additionalPayment: number;
  accounts: AccountItem[];
  results: ResultsObject[];
  dateEnd: Date;
  errors: string[];
}
