import uuid from "../helpers/uuid";

const accounts = [
  {
    name: "Visa",
    balance: 3500,
    interest: 20.99,
    minPayment: 125,
  },
  {
    name: "Student Loan",
    balance: 3000,
    interest: 4.75,
    minPayment: 150,
  },
].map((account) => {
  return {
    ...account,
    key: uuid(),
  };
});

export default accounts;
