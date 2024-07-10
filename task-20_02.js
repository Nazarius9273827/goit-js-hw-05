function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomRgb();
      boxesContainer.appendChild(div);
      size += 10;
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-action="render"]').addEventListener('click', () => {
    const amount = Number(document.getElementById('amount-input').value);
    createBoxes(amount);
  });

  document.querySelector('[data-action="destroy"]').addEventListener('click', () => {
    destroyBoxes();
  });