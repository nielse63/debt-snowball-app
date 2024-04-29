import React, { createContext, useReducer, Reducer } from "react";
import reducers from "./reducers";
import initialState from "./state";

export const AccountsContext = createContext({ ...initialState });
export const AccountsContextDispatcher = createContext((_: any) => {});

export const AccountsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducers,
    initialState
  );

  return (
    <AccountsContext.Provider value={state}>
      <AccountsContextDispatcher.Provider value={dispatch}>
        {children}
      </AccountsContextDispatcher.Provider>
    </AccountsContext.Provider>
  );
};
