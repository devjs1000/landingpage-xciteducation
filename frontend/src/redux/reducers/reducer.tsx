const initialState = {
    account:{}
};

const reducer = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return { ...state, account: action.accountVal };
      break;
    default:
      return state;
  }
};

export default reducer;
