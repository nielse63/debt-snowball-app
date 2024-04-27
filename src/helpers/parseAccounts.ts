import isNumeric from "./isNumeric";

const parseItem = (item: AccountItem) => {
  return Object.entries(item).reduce(
    (acc, [key, value]) => {
      if (!isNumeric(value.value)) {
        return {
          ...acc,
          [key]: value,
        };
      }
      return {
        ...acc,
        [key]: { value: parseFloat(value.value) },
      };
    },
    {
      name: { value: "" },
      balance: { value: 0 },
      interest: { value: 0 },
      minPayment: { value: 0 },
    }
  );
};

const parseAccounts = (accounts: AccountItem[]) => {
  return accounts
    .filter((item: AccountItem) => {
      return Object.values(item).every((item) => {
        return "value" in item && item.value !== "" && item.value !== 0;
      });
    })
    .map(parseItem)
    .map((item) => {
      return {
        name: item.name.value,
        interest: parseFloat(item.interest.value.toFixed(2)),
        balance: parseFloat(item.balance.value.toFixed(2)),
        minPayment: parseFloat(item.minPayment.value.toFixed(2)),
      };
    });
};

export default parseAccounts;
