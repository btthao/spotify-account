export const initialState = {
  userId: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { ...state, userId: action.payload };
    }

    default:
      return state;
  }
};
