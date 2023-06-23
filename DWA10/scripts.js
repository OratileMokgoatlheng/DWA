// const MAX_NUMBER = 20;
// const MIN_NUMBER = -20;

// const keys = {
//   add: document.querySelector('[data-key = "add"]'),
//   subtract: document.querySelector('[data-key = "subtract"]'),
//   input: document.querySelector('[data-key = "number"]'),
//   reset: document.querySelector('[data-key = "reset"]'),
// };

// const reset = {
//   overlay: document.querySelector('[data-reset-overlay]')
// }

// const addHandler = () => {
//   const newValue = parseInt(keys.input.value) + 1;
//   keys.input.value = newValue;

//   if (newValue >= MAX_NUMBER) {
//     keys.add.style.color = "pink";
//     keys.add.disabled = true
//   }

//   if (keys.subtract.disabled === true) {
//     keys.subtract.style.color = "red"
//     keys.subtract.disabled = false;
//   }
// };

// const subtractHandler = () => {
//   const newValue = parseInt(keys.input.value) - 1;
//   keys.input.value = newValue;

//   if (newValue <= MIN_NUMBER) {
//     keys.subtract.style.color = "pink";
//     keys.subtract.disabled = true;
//   }
//   if (keys.add.disabled === true) {
//     keys.add.style.color = "red"
//     keys.add.disabled = false;
//   }
// };

// const resetHandler = () => {
//     keys.input.value = 0
//     reset.overlay.show();
// }


// keys.add.addEventListener("click", addHandler);
// keys.subtract.addEventListener("click", subtractHandler);
// keys.reset.addEventListener("click", resetHandler);
const MAX_NUMBER = 20;
const MIN_NUMBER = -20;

const attachShadowRoot = (element) => {
  const shadowRoot = element.attachShadow({ mode: 'open' });
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      /* Define your styles here */
    </style>
    <div>
      <!-- Your HTML content here -->
    </div>
  `;
  shadowRoot.appendChild(template.content.cloneNode(true));
  return shadowRoot;
};

const keys = attachShadowRoot(document.querySelector('[data-keys-container]'));

keys.innerHTML = `
  <button data-key="add">Add</button>
  <button data-key="subtract">Subtract</button>
  <input type="text" data-key="number" value="0">
  <button data-key="reset">Reset</button>
`;

const reset = {
  overlay: attachShadowRoot(document.querySelector('[data-reset-overlay]')),
};

const addHandler = () => {
  const newValue = parseInt(keys.querySelector('[data-key="number"]').value) + 1;
  keys.querySelector('[data-key="number"]').value = newValue;

  if (newValue >= MAX_NUMBER) {
    keys.querySelector('[data-key="add"]').style.color = 'pink';
    keys.querySelector('[data-key="add"]').disabled = true;
  }

  if (keys.querySelector('[data-key="subtract"]').disabled === true) {
    keys.querySelector('[data-key="subtract"]').style.color = 'red';
    keys.querySelector('[data-key="subtract"]').disabled = false;
  }
};

const subtractHandler = () => {
  const newValue = parseInt(keys.querySelector('[data-key="number"]').value) - 1;
  keys.querySelector('[data-key="number"]').value = newValue;

  if (newValue <= MIN_NUMBER) {
    keys.querySelector('[data-key="subtract"]').style.color = 'pink';
    keys.querySelector('[data-key="subtract"]').disabled = true;
  }
  if (keys.querySelector('[data-key="add"]').disabled === true) {
    keys.querySelector('[data-key="add"]').style.color = 'red';
    keys.querySelector('[data-key="add"]').disabled = false;
  }
};

const resetHandler = () => {
  keys.querySelector('[data-key="number"]').value = 0;
  reset.overlay.style.display = 'block';
};

keys.querySelector('[data-key="add"]').addEventListener('click', addHandler);
keys.querySelector('[data-key="subtract"]').addEventListener('click', subtractHandler);
keys.querySelector('[data-key="reset"]').addEventListener('click', resetHandler);
