import uuid from "../helpers/uuid";

const accounts = [
  {
    name: "Visa",
    balance: 3000,
    interest: 14.99,
    minPayment: 100,
  },
  {
    name: "Student Loan",
    balance: 5000,
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
