const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        //this._fetchProducts();
        this._getProducts()
            .then(data => {
            this.goods = [...data];
            this.render();
            });
    }
    /*_fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50}
        ];
    }*/
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
            console.log(error);
        });
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML("afterBegin", productObj.render());
        }
    }
    sumOfProducts() {
        return this.allProducts.reduce((sum, item) => sum += item.price, 0);
    }
}

class ProductItem {
    constructor(product, img = "https://placehold.it/185x185") {
        this.id = product.id_product;
        this.title = product.product_name;
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

class Basket {
    constructor(container = ".basket") {
        this.basketContainer = container;
        this.basketGoods = [];
        this._modal();
        this._buy();
        this._reset();
    }
    _getItem() { //метод для получения удаленной строки JSON с товарами для корзины
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
            console.log(error);
        });
    }
    _buy() { //метод, через который осуществляется покупка выбранных товаров
        this._getItem()
            .then(data => {
                let buyButton = document.querySelectorAll(".buy-btn");
                for (let i = 0; i < buyButton.length; i++) {
                    buyButton[i].onclick = (e) => {
                        switch(e.target) {
                            case buyButton[0]:
                                for (let i = 0; i < this.basketGoods.length; i++) {
                                    if(this.basketGoods[i] == data.contents[1]) {
                                        this.basketGoods[i].quantity += 1;
                                    }
                                }
                                if(this.basketGoods.indexOf(data.contents[1]) == -1) {
                                    this.basketGoods.push(data.contents[1]);    
                                }
                                this._count();
                                this.render();
                                break;
                            case buyButton[1]:
                                for (let i = 0; i < this.basketGoods.length; i++) {
                                    if(this.basketGoods[i] == data.contents[0]) {
                                        this.basketGoods[i].quantity += 1;
                                    }
                                }
                                if(this.basketGoods.indexOf(data.contents[0]) == -1) {
                                    this.basketGoods.push(data.contents[0]);    
                                }
                                this._count();
                                this.render();
                                break;
                        }
                    }     
                }
            });
    }
    
    _count() { //счетчик покупок
        let count = 0;
        let countBlock = document.querySelector(".count");
        for (let i = 0; i < this.basketGoods.length; i++) {
            count += this.basketGoods[i].quantity;  
        }
        countBlock.innerHTML = count;
    }
    
    _modal() { //метод активации окна корзины
        const buttonCart = document.querySelector(".btn-cart");
        buttonCart.addEventListener("click", () => {
            const main = document.querySelector(".main-block");
            let basketWrap = document.createElement("div");
            basketWrap.className = "basketWrap";
            main.appendChild(basketWrap);
            let basketDiv = document.createElement("div");
            basketDiv.className = "basket";
            basketWrap.appendChild(basketDiv);
            let basketPrice = document.createElement("p");
            basketPrice.className = "finalPrice";
            basketWrap.appendChild(basketPrice);
            this.render();
        });
    }
    
    _reset() { //метод, через который осуществляется удаление выбранных товаров        
        let deleteButton = document.querySelectorAll(".del-btn");
            for (let i = 0; i < deleteButton.length; i++) {
                deleteButton[i].onclick = (e) => {
                    switch(e.target) {
                        case deleteButton[0]:
                            for (let i = 0; i < this.basketGoods.length; i++) {
                                if(this.basketGoods[i] == data.contents[1]) {
                                    this.basketGoods[i].quantity -= 1;
                                }
                                else if(this.basketGoods[i] == data.contents[1] && this.basketGoods[i].quantity == 1) {
                                    delete this.basketGoods[i];
                                }
                            }
                            this._count();
                            this.render();
                            break;
                        case deleteButton[1]:
                            for (let i = 0; i < this.basketGoods.length; i++) {
                                if(this.basketGoods[i] == data.contents[0]) {
                                    this.basketGoods[i].quantity -= 1;
                                }
                                else if(this.basketGoods[i] == data.contents[0] && this.basketGoods[i].quantity == 1) {
                                    delete this.basketGoods[i];
                                }
                            }
                            this._count();
                            this.render();
                            break;
                    }     
                }
            }
    }
    
    _sum() { //метод, через который определяется сумма всех товаров в корзине
        let finalPrice = document.querySelector(".finalPrice");
        let sum = 0;
        for (let item of this.basketGoods) {
            sum += (item.price * item.quantity);
        }
        finalPrice.innerHTML = `Общая стоимость: ${sum} рублей`;
    }
    render() {
        let basketBlock = document.querySelector(this.basketContainer);
        let full = "";
        for (let item of this.basketGoods) {
            const basketObj = new BasketItem(item);
            full += basketObj.render();
            basketBlock.innerHTML = full;
        }
        this._sum();
    }
}

class BasketItem {
    constructor(product, img = "https://placehold.it/50x50") {
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.img = img;
        this.quantity = product.quantity;
    }
    render() {
        return `<div class="basketProduct_wrap"><img src="${this.img}" alt="product-image"><p class="basketProduct_title">${this.title}</p><p class="basketProduct_price">${this.price}</p><p
        class="basketProduct_quantity">${this.quantity}</p><p class="del-btn"></p></div>`
    }
}

let list = new ProductList();
let basket = new Basket();