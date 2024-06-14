export const Reducer = (
  state: InitialGlobalReducerTypes.InitialStateType,
  action: InitialGlobalReducerTypes.Actions
) => {
  switch (action.type) {
    case InitialGlobalReducerTypes.Types.TEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};
