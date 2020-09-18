export default (state = {}, action) => {
  const { brewery, beer, style, price, abv, count, id } = action;
  switch(action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          brewery: brewery,
          beer: beer,
          style: style,
          price: price,
          abv: abv,
          count: count,
          id: id
        }
      });
      case 'DELETE_TAP':
    const newState = { ...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};