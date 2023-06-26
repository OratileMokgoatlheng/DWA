

import { createStore } from './modules/store.js';
import { reducer } from './modules/reducer.js';
import { incrementAction, decrementAction, resetAction } from './modules/actions.js';
import { logState } from './modules/subscriptions.js';

// Create store instance
const store = createStore(reducer, { count: 0 });

// Subscribe to store changes
store.subscribe(logState);

// Dispatch actions
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(resetAction)




























// //@ts-check
// import { State, getState } from "./modules/store.js";
// import { decrement, increment, dispatch, reset } from "./modules/actions.js";

// // Retrieve the initial state and log it
// console.log(getState());

// // Get references to the relevant DOM elements
// const number = document.querySelector('[data-number]');
// const subtract = document.querySelector('[data-subtract]');
// const add = document.querySelector('[data-add]');
// const resetButton = document.querySelector('[data-reset]');
// const overlay = document.querySelector('[data-overlay]');

// // Function to handle the subtraction operation
// const subtractHandler = () => {
//   // Dispatch the decrement action
//   dispatch(decrement());

//   // Update the number value on the UI
//   number.value = State.value;

//   // Enable the add button if it was disabled
//   if (add.disabled) {
//     add.disabled = false;
//   }
// };

// // Function to handle the addition operation
// const addHandler = () => {
//   // Dispatch the increment action
//   dispatch(increment());

//   // Update the number value on the UI
//   number.value = State.value;

//   // Enable the subtract button if it was disabled
//   if (subtract.disabled) {
//     subtract.disabled = false;
//   }
// };

// // Function to handle the reset operation
// const resetHandler = () => {
//   // Check if the current number value is already zero
//   if (parseInt(number.value) === 0) {
//     return;
//   }

//   // Dispatch the reset action
//   dispatch(reset());

//   // Update the number value on the UI
//   number.value = State.value;

//   // Show the overlay element
//   overlay.show();

//   // Close the overlay after a delay of 1500 milliseconds (1.5 seconds)
//   setTimeout(() => {
//     overlay.close();
//   }, 1500);
// };

// // Attach event listeners to the relevant buttons
// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);
// resetButton.addEventListener('click', resetHandler);
