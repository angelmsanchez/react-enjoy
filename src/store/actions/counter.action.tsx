export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementCounter = () => {
  console.log('incrementCounter');
  return {
    type: INCREMENT
  };
};

export const decrementCounter = () => {
  console.log('decrementCounter');
  return {
    type: DECREMENT
  };
};
