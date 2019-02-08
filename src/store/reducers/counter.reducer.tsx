import { INCREMENT, DECREMENT } from './../actions/counter.action';

const counter = (state = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      console.log('INCREMENT');
      return state + 1;
    case DECREMENT:
      console.log('DECREMENT');
      return state - 1;
    default:
      return state;
  }
};

export default counter;
