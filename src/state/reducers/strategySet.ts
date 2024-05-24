const strategySet = (state: State, action: Action) => {
  const value = action.payload;
  if (value === state.additionalPayment) return state;
  return {
    ...state,
    strategy: value,
  };
};

export default strategySet;
