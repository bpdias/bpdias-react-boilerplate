import { INCREMENT, DECREMENT } from "../CONSTANTS";

export const incrementAction = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const increment = (step) => {
  return (dispatch) => {
    console.log("dispatch=", dispatch);
    dispatch(incrementAction(step));
  };
};
