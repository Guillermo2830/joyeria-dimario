
const menuProducts = document.querySelector('.products-nav');
const productsContainer = document.querySelector('.sub-info-container');

menuProducts.addEventListener('mouseover', () => {
    productsContainer.classList.remove('inactivo');
});

menuProducts.addEventListener('click', () => {
    productsContainer.classList.toggle('inactivo');
});

document.addEventListener('click', (event) => {
    if (!menuProducts.contains(event.target) && !productsContainer.contains(event.target)) {
        productsContainer.classList.add('inactivo');
    }
});