import uuid from "../../helpers/uuid";

const errorAdded = (state: State, action: Action) => {
  const errors: ErrorObject[] = state.errors;
  const errorExists = errors.find((error) => {
    if ("id" in action.payload) return error.id === action.payload.id;
    return error.message === action.payload.message;
  });
  if (errorExists) {
    return { ...state };
  }
  return {
    ...state,
    errors: [
      ...errors,
      {
        id: uuid(),
        ...action.payload,
      },
    ],
  };
};

export default errorAdded;
