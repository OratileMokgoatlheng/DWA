
  import { State } from "./store.js";

/**
 * @typedef {Object} Increment
 * @prop {"INCREMENT_COUNT"} type
 * @prop {State}
 */

/**
 * @typedef {Object} Decrement
 * @prop {"DECREMENT_COUNT"} type
 * @prop {State}
 */

/**
 * @typedef {Object} Reset
 * @prop {"RESET_COUNT"} type
 * @prop {State}
 */

/**
 * @typedef {Increment | Decrement | Reset} Action
 */

/**
 * Increases the count value by 1.
 * @returns {Increment}
 */
export const increment = () => {
  State.value += 1;
  return {
    type: "INCREMENT_COUNT",
  };
};

/**
 * Decreases the count value by 1.
 * @returns {Decrement}
 */
export const decrement = () => {
  State.value -= 1;
  return {
    type: "DECREMENT_COUNT",
  };
};

/**
 * Resets the count value to 0.
 * @returns {Reset}
 */
export const reset = () => {
  State.value = 0;
  return {
    type: "RESET_COUNT",
  };
};

/**
 * Dispatches an action to the reducer.
 * @param {Action} action
 */
export const dispatch = (action) => {
  return reducer(State, action);
};

/**
 * Reducer function to update the state based on the action.
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT": {
      // Perform any necessary operations when incrementing the count
      state.value;
    }
    case "DECREMENT_COUNT": {
      // Perform any necessary operations when decrementing the count
      state.value;
    }
    case "RESET_COUNT": {
      // Perform any necessary operations when resetting the count
      state.value;
    }
    default:
      return state;
  }
};
