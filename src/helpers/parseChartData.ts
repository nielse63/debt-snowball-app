import { addMonths } from "date-fns";
import kebabCase from "./kebabCase";

export type ParsedOutputObject = {
  [key: string]: {
    id: string;
    label: string;
    data: number[];
  };
};

const parseChartData = (data: any[]) => {
  const dateNow = new Date();
  const xAxisData = [dateNow];
  const accounts: ParsedOutputObject = {};
  data.forEach((item, index) => {
    if (index === 0) {
      item.accounts.forEach((account: PaymentObject) => {
        if (!accounts[account.name]) {
          accounts[account.name] = {
            id: kebabCase(account.name),
            label: account.name,
            data: [account.balanceStart],
          };
        }
      });
    }
    xAxisData.push(addMonths(dateNow, index));

    // add item to series
    item.accounts.forEach((account: PaymentObject) => {
      accounts[account.name].data.push(account.balanceEnd);
    });
  });
  return {
    xAxisData,
    series: Object.values(accounts),
  };
};

export default parseChartData;
