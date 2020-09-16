const products = [
    {id: 1, title: 'Notebook', price: 2000, image: 'img/заглушка.jpg'},
    {id: 2, title: 'Mouse', price: 20, image: 'img/заглушка.jpg'},
    {id: 3, title: 'Keyboard', price: 200, image: 'img/заглушка.jpg'},
    {id: 4, title: 'Gamepad', price: 50, image: 'img/заглушка.jpg'}
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="${product.image}" alt="product-image" width="185" height="185" >
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">Цена: ${product.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const correctPage = (a, b, c, d) => a + b + c + d;

const renderPage = (list = products) => {
    let productsList = list.map(item => renderProduct(item));
    productsList = correctPage(...productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage();