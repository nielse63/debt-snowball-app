import isNumeric from "./isNumeric";

const parseItem = (item: AccountItem) => {
  return Object.entries(item).reduce(
    (acc, [key, value]) => {
      if (!isNumeric(value)) {
        return {
          ...acc,
          [key]: value,
        };
      }
      return {
        ...acc,
        [key]: parseFloat(value),
      };
    },
    {
      name: "",
      balance: 0,
      interest: 0,
      minPayment: 0,
    }
  );
};

const parseAccounts = (accounts: AccountItem[]) => {
  return accounts
    .filter((item: AccountItem) => {
      return Object.values(item).every(Boolean);
    })
    .map(parseItem)
    .map((item) => {
      console.log({ item });
      return {
        name: item.name,
        interest: parseFloat(item.interest.toFixed(2)),
        balance: parseFloat(item.balance.toFixed(2)),
        minPayment: parseFloat(item.minPayment.toFixed(2)),
      };
    });
};

export default parseAccounts;
