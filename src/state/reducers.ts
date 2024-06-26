import { actionTypes } from "../helpers/constants";
import accountAdded from "./reducers/accountAdded";
import accountDeleted from "./reducers/accountDeleted";
import accountEdited from "./reducers/accountEdited";
import calculated from "./reducers/calculated";
import errorAdded from "./reducers/errorAdded";
import errorDismissed from "./reducers/errorDismissed";
import minPaymentSet from "./reducers/minPaymentSet";
import strategySet from "./reducers/strategySet";

const reducers = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.CALCULATE:
      return calculated(state);
    case actionTypes.SET_MIN_PAYMENT:
      return minPaymentSet(state, action);
    case actionTypes.ADD_ACCOUNT:
      return accountAdded(state);
    case actionTypes.DELETE_ACCOUNT:
      return accountDeleted(state, action);
    case actionTypes.EDIT_ACCOUNT:
      return accountEdited(state, action);
    case actionTypes.ADD_ERROR:
      return errorAdded(state, action);
    case actionTypes.DISMISS_ERROR:
      return errorDismissed(state, action);
    case actionTypes.SET_STRATEGY:
      return strategySet(state, action);
  }

  return { ...state };
};

export default reducers;
