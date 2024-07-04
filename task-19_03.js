        const nameInput = document.getElementById('name-input');
        const nameOutput = document.getElementById('name-output');

        nameInput.addEventListener('input', () => {
            nameOutput.textContent = nameInput.value.trim() ? nameInput.value : 'незнайомець';
        });

        const validationInput = document.getElementById('validation-input');
        const requiredLength = parseInt(validationInput.getAttribute('data-length'), 10);

        validationInput.addEventListener('blur', () => {
            if (validationInput.value.length === requiredLength) {
                validationInput.classList.add('valid');
                validationInput.classList.remove('invalid');
            } else {
                validationInput.classList.add('invalid');
                validationInput.classList.remove('valid');
            }
        });