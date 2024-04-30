import { errorIds } from "../../helpers/constants";
import errorAdded from "./errorAdded";

const minPaymentSet = (state: State, action: Action) => {
  const value = parseFloat(action.payload);
  if (value === state.additionalPayment) return state;
  if (value < 0 || isNaN(value)) {
    return errorAdded(state, {
      ...action,
      payload: {
        ...action.payload,
        message: "Minimum payment must be greater than or equal to 0.",
        source: "FormCard",
        id: errorIds.SET_MIN_PAYMENT,
      },
    });
  }
  return {
    ...state,
    additionalPayment: value,
  };
};

export default minPaymentSet;
