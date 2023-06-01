'use strict';

console.clear();

// const elem = document.getElementById("my-list");
// elem.addEventListener("click", (e) => {
//   const a = e.currentTarget.querySelector("a");
//   console.log(a);
// })

const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const throttleText = document.getElementById('throttle');
const debounceText = document.getElementById('debounce');
const leadingDebounceText = document.getElementById('leading-debounce');

const throttle = _.throttle((e) => {
  throttleText.textContent = e.target.value;
}, 1000);

const debounce = _.debounce((e) => {
  debounceText.textContent = e.target.value;
}, 1000);

const leadingDebounce = _.debounce((e) => {
    leadingDebounceText.textContent = e.target.value;
  }, 1000,
  {
    leading: true,
    trailing: false,
  },
);

input.addEventListener('input', e => defaultText.textContent = e.target.value);
input.addEventListener('input', throttle);
input.addEventListener('input', debounce);
input.addEventListener('input', leadingDebounce);

