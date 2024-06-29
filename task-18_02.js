const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.getElementById('ingredients');

const listItems = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ingredientsList.append(...listItems);