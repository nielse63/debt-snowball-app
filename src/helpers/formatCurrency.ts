const formatCurrency = (value: number, options = {}) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  }).format(value);
};

export default formatCurrency;
