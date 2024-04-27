const isNumeric = (str: number | string) => {
  if (typeof str === "number") return true;
  if (typeof str !== "string") return false;
  return !isNaN(parseFloat(str));
};

export default isNumeric;
