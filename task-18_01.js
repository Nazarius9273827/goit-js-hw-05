const categories = document.querySelectorAll('#categories .item');

console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;

    const itemsCount = category.querySelectorAll('ul li').length;

    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});