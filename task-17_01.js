const button = document.getElementById('changeButton');
const textInput = document.getElementById('textInput');

button.addEventListener('click', () => {
    button.textContent = textInput.value;
});