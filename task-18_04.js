let counterValue = 0;

function increment() {
  counterValue += 1;
  updateCounter();
}

function decrement() {
  counterValue -= 1;
  updateCounter();
}

function updateCounter() {
  document.getElementById("value").textContent = counterValue;
}

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", decrement);
document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", increment);