const getTotalValues = (results: ResultsObject[], key: string) => {
  return results.reduce((acc: number, result) => {
    const monthlyInterest = result.accounts.reduce(
      (sum: number, account: PaymentObject) => {
        return sum + account[key];
      },
      0
    );
    return acc + monthlyInterest;
  }, 0);
};

export default getTotalValues;
