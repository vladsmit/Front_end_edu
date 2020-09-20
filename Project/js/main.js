class ProductList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        //this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50}
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML("afterBegin", productObj.render());
        }
    }
    sumOfProducts() { //метод определяющий суммарную стоимость всех 4-х товаров
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        return `Суммарная стоимость всех товаров: ${sum}$`;
    }
}

class ProductItem {
    constructor(product, img = "https://placehold.it/185x185") {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="product-image" width="185" height="185">
                <h3 class="product-title">${this.title}</h3>
                <p class="product-price">Цена: ${this.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket { //класс обьекта корзины товаров
    constructor(container = ".basket") {
        this.basketContainer = container;
        this._addItem();
    }
    _addItem() { //метод, через который присваивается событие для кнопок и происходит добавление товаров в корзину
        const basketBlock = document.querySelector(this.basketContainer);
        const buttons = document.querySelectorAll(".buy-btn");
        for (let i = 0; i < buttons.length; i++) {
            let basketGood;
            buttons[i].onclick = function(e) {
                switch (e.target) {
                    case buttons[0]:
                        basketGood = new BasketItem(list.goods[0]);
                        basketBlock.insertAdjacentHTML("beforeEnd", basketGood.render());
                        break;
                    case buttons[1]:
                        basketGood = new BasketItem(list.goods[1]);
                        basketBlock.insertAdjacentHTML("beforeEnd", basketGood.render());
                        break;
                    case buttons[2]:
                        basketGood = new BasketItem(list.goods[2]);
                        basketBlock.insertAdjacentHTML("beforeEnd", basketGood.render());
                        break;
                    case buttons[3]:
                        basketGood = new BasketItem(list.goods[3]);
                        basketBlock.insertAdjacentHTML("beforeEnd", basketGood.render());
                        break;
                }
            }
        }
    }
    _buy() { //метод, через который осуществляется покупка выбранных товаров
        
    }
    _reset() { //метод, через который осуществляется сброс выбранных товаров
          
    }
    _quantity() { //метод, через который определяется количество каждого наименования
            
    }
    _sum() { //метод, через который определяется сумма всех товаров в корзине
        
    }
}

class BasketItem { //класс обьекта элемента корзины товаров
    constructor(product, img = "https://placehold.it/50x50") {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render() { //метод, через который формируется верстка элемента корзины товаров
        return `<div class="basketProduct_wrap"><img src="${this.img}" alt="product-image"><p class="basketProduct_title">${this.title}</p><p class="basketProduct_price">${this.price}</p></div>`
    }
}

let list = new ProductList();
list.render();
let basket = new Basket();
console.log(list.sumOfProducts());