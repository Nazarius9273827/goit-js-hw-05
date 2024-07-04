document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="color"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            document.body.style.backgroundColor = this.value;
        });
    });

    document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;
});