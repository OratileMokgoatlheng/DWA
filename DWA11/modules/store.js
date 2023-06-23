//@ts-check

/**
 * @typedef {Object} State
 * @prop {number} value - The value representing the current state.
 */
export const State = {
    value: 0,
  };
  
  /**
   * Gets the current state.
   * @callback getState
   * @returns {State} - The current state object.
   */
  
  /**
   * Returns the value of the current state.
   * @return {number} - The value of the state.
   */
  export const getState = () => {
    return State.value;
  };