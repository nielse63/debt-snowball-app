const errorDismissed = (state: State, action: Action) => {
  const { errors } = state;
  const { id } = action.payload;
  const error = errors.find((error) => {
    return error.id === id;
  });
  if (!error) return state;
  return {
    ...state,
    errors: errors.filter((error) => {
      return error.id !== id;
    }),
  };
};

export default errorDismissed;
