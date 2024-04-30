const kebabCase = (str: string) => {
  return str.replace(/\s/g, "-").toLowerCase();
};

export default kebabCase;
