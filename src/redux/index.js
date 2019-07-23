import {createStore} from "redux";

let reducers = function(state=1, action){
  switch (action.type) {
    case 'ADD':
      return state + 1;
      break;
    case 'DEC':
      return state - 1;
      break;
    default:
      return state;
  }
};

export default createStore(reducers);