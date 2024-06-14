declare namespace InitialGlobalReducerTypes {
  enum Types {
    TEST = "TEST",
  }

  type InitialStateType = {};

  type Payload = {
    [Types.TEST]: {
      test: string;
    };
  };

  type Actions =
    CommonReducersTypes.ActionMap<Payload>[keyof CommonReducersTypes.ActionMap<Payload>];
}
