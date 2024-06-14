import { createContext, useContext, useReducer, FC } from "react";

import { Reducer } from "reducers/globalReducer";

import { ContextProps, AppContextProps } from "./models.d";

const initialState: InitialGlobalReducerTypes.InitialStateType = {};

const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider: FC<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
