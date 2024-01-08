const reducer = (state, action) => {
  if (action.type === "INC") return state + 1;
  if (action.type === "DEC") return state < 1 ? 0 : state - 1;
  return state;
};

export default reducer;
