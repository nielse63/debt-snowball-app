import { addMonths } from "date-fns";
import { AccountObject } from "node-debt-snowball";
import kebabCase from "./kebabCase";

type AccountsObject = {
  [key: string]: {
    id: string;
    label: string;
    data: number[];
  };
};

const parseChartData = (data: any[]) => {
  const dateNow = new Date();
  const xAxisData = [dateNow];
  const accounts: AccountsObject = {};
  data.forEach((item, index) => {
    if (index === 0) {
      item.accounts.forEach((account: AccountObject) => {
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
    item.accounts.forEach((account: AccountObject) => {
      accounts[account.name].data.push(account.balanceEnd);
    });
  });
  return {
    xAxisData,
    series: Object.values(accounts),
  };
};

export default parseChartData;
