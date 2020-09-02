function buy(e) {
    switch(e.target) {
        case buttonArr[0]:
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", productArr[0].name);
            document.querySelector("#x_0").append(newLi);
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", 1);
            document.querySelector("#x_1").append(newLi);
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", productArr[0].price);
            document.querySelector("#x_2").append(newLi);
            sum += productArr[0].price;
            total.innerHTML = sum;
            break;
        case buttonArr[1]:
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", productArr[1].name);
            document.querySelector("#x_0").append(newLi);
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", 1);
            document.querySelector("#x_1").append(newLi);
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", productArr[1].price);
            document.querySelector("#x_2").append(newLi);
            sum += productArr[1].price;
            total.innerHTML = sum;
            break;
        case buttonArr[2]:
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", productArr[2].name);
            document.querySelector("#x_0").append(newLi);
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", 1);
            document.querySelector("#x_1").append(newLi);
            newLi = document.createElement("li");
            newLi.insertAdjacentHTML("afterBegin", productArr[2].price);
            document.querySelector("#x_2").append(newLi);
            sum += productArr[2].price;
            total.innerHTML = sum;
            break;
    }
}

var buttonArr = [], newLi, sum = 0;

var mainWrap = document.querySelectorAll("div")[0];
mainWrap.className = "mainWrap";
var basketDiv = document.createElement("div");
basketDiv.className = "basket";
document.querySelectorAll("div")[0].append(basketDiv);
var productWrapDiv = document.createElement("div");
productWrapDiv.className = "wrapDiv";
document.querySelectorAll("div")[0].append(productWrapDiv);

for (var i = 0; i < 3; i++) {
    var productDiv = document.createElement("div");
    productDiv.className = "product";
    productWrapDiv.appendChild(productDiv);
    var productImage = document.createElement("img");
    productImage.className = "image";
    productDiv.appendChild(productImage);
    var productName = document.createElement("p");
    productName.className = "name";
    productDiv.appendChild(productName);
    var productPrice = document.createElement("p");
    productPrice.className = "price";
    productDiv.appendChild(productPrice);
    var buyButton = document.createElement("button");
    buyButton.insertAdjacentHTML("afterBegin", "купить");
    buyButton.className = "button";
    buyButton.onclick = buy;
    buttonArr.push(buyButton);
    productDiv.appendChild(buyButton);
}

for (var i = 0; i < 4; i++) {
    var titleBasket = document.createElement("p");
    titleBasket.id = "y_" + i;
    titleBasket.className = "basketTitle";
    basketDiv.appendChild(titleBasket);
}

for (var i = 0; i < 3; i++) {
    var placeBasket = document.createElement("ul");
    placeBasket.id = "x_" + i;
    placeBasket.className = "basketStr";
    basketDiv.appendChild(placeBasket);
}

var total = document.createElement("p");
total.className = "sum";
total.insertAdjacentHTML("afterBegin", sum);
basketDiv.appendChild(total);

t1 = document.getElementById("y_0");
t1.insertAdjacentHTML("afterBegin", "Наименование товара");
t2 = document.getElementById("y_1");
t2.insertAdjacentHTML("afterBegin", "Кол-во");
t3 = document.getElementById("y_2");
t3.insertAdjacentHTML("afterBegin", "Цена");
t4 = document.getElementById("y_3");
t4.insertAdjacentHTML("afterBegin", "Сумма");

var images = document.querySelectorAll(".image");
for (var i = 0; i < 3; i++) {
    images[i].src = productArr[i].pic;
}

var names = document.querySelectorAll(".name");
for (var i = 0; i < 3; i++) {
    names[i].insertAdjacentHTML("afterBegin", productArr[i].name);
}

var prices = document.querySelectorAll(".price");
for (var i = 0; i < 3; i++) {
    prices[i].insertAdjacentHTML("afterBegin", productArr[i].price + " рублей");
}