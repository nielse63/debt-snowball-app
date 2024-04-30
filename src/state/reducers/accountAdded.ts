import { DEFAULT_ACCOUNT } from "../../helpers/constants";
import uuid from "../../helpers/uuid";

const accountAdded = (state: State) => {
  return {
    ...state,
    accounts: [
      ...state.accounts,
      {
        ...DEFAULT_ACCOUNT,
        key: uuid(),
      },
    ],
  };
};

export default accountAdded;
