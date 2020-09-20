class Hamburger {
    constructor(checkCount, size, stuffing, burger, topping, necessaryStuff, additionalStuff) {
        this.checkCount = 0;
        this.size = [];
        this.stuffing = [];
        this.topping = []
        this.burger = [
            {name: "Маленький бургер", price: 50, cal: 20},
            {name: "Большой бургер", price: 100, cal: 40}
        ];
        this.necessaryStuff = [
            {name: "Сыр", price: 10, cal: 20},
            {name: "Салат", price: 20, cal: 5},
            {name: "Картофель", price: 15, cal: 10}
        ];
        this.additionalStuff = [
            {name: "Приправа", price: 15, cal: 0},
            {name: "Майонез", price: 20, cal: 5}
        ];
        this.getSize();
        this.addStuffing();
        this.addTopping();
        this.buy();
    }
    getSize(){
        let finalBurger = document.querySelector(".finalBurger");
        let smallBurger = document.querySelector(".labelSmall");
        let bigBurger = document.querySelector(".labelBig");
        smallBurger.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                finalBurger.innerHTML = this.burger[0].name;
                this.size[0] = this.burger[0];
                this.calculatePrice();
                this.calculateCalories(); 
            }
        }
        bigBurger.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                finalBurger.innerHTML = this.burger[1].name;
                this.size[0] = this.burger[1];
                this.calculatePrice();
                this.calculateCalories();
            }
        }
    } 
    addStuffing() {
        let finalStuff = document.querySelector(".finalStuff");
        let cheese = document.querySelector(".labelCheese");
        let salad = document.querySelector(".labelSalad");
        let potato = document.querySelector(".labelPotato");
        cheese.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                this.stuffing.push(this.necessaryStuff[0]);
                this.calculatePrice();
                this.calculateCalories(); 
                this.calculateCheck();
                this.checkCount++;
            }
            else {
                for (let i = 0; i < this.stuffing.length; i++) {
                    if (this.stuffing[i] == this.necessaryStuff[0]) {
                        this.stuffing.splice(i, 1);
                        this.calculatePrice();
                        this.calculateCalories();
                        this.calculateCheck();
                        this.checkCount--;
                    }
                }
            }
        }
        salad.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                this.stuffing.push(this.necessaryStuff[1]);
                this.calculatePrice();
                this.calculateCalories(); 
                this.calculateCheck();
                this.checkCount++;
            }
            else {
                for (let i = 0; i < this.stuffing.length; i++) {
                    if (this.stuffing[i] == this.necessaryStuff[1]) {
                        this.stuffing.splice(i, 1);
                        this.calculatePrice();
                        this.calculateCalories(); 
                        this.calculateCheck();
                        this.checkCount--;
                    }
                }
            }
        }
        potato.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                this.stuffing.push(this.necessaryStuff[2]);
                this.calculatePrice();
                this.calculateCalories(); 
                this.calculateCheck();
                this.checkCount++;
            }
            else {
                for (let i = 0; i < this.stuffing.length; i++) {
                    if (this.stuffing[i] == this.necessaryStuff[2]) {
                        this.stuffing.splice(i, 1);
                        this.calculatePrice();
                        this.calculateCalories();
                        this.calculateCheck();
                        this.checkCount--;
                    }
                }
            }
        }
    }
    addTopping() {
        let finalTop = document.querySelector(".finalTop");
        let spice = document.querySelector(".labelSpice");
        let mayo = document.querySelector(".labelMayo");
        spice.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                this.topping.push(this.additionalStuff[0]);
                this.calculatePrice();
                this.calculateCalories(); 
                this.calculateCheck();
            }
            else {
                for (let i = 0; i < this.topping.length; i++) {
                    if (this.topping[i] == this.additionalStuff[0]) {
                        this.topping.splice(i, 1);
                        this.calculatePrice();
                        this.calculateCalories();
                        this.calculateCheck();
                    }
                }
            }
        }
        mayo.onclick = e => {
            let checked = e.target.checked;
            if (checked) {
                this.topping.push(this.additionalStuff[1]);
                this.calculatePrice();
                this.calculateCalories(); 
                this.calculateCheck();
            }
            else {
                for (let i = 0; i < this.topping.length; i++) {
                    if (this.topping[i] == this.additionalStuff[1]) {
                        this.topping.splice(i, 1);
                        this.calculatePrice();
                        this.calculateCalories();
                        this.calculateCheck();
                    }
                }
            }
        }
    }
    calculatePrice(){
        let sum = 0;
        let finalPrice = document.querySelector(".finalPrice");
        for (let item of this.stuffing) {
            sum += item.price; 
        }
        for (let item of this.size) {
            sum += item.price; 
        }
        for (let item of this.topping) {
            sum += item.price; 
        }
        finalPrice.innerHTML = `${sum} рублей`;
    }
    calculateCalories(){
        let cal = 0;
        let finalCal = document.querySelector(".finalCal"); 
        for (let item of this.stuffing) {
            cal += item.cal; 
        }
        for (let item of this.size) {
            cal += item.cal; 
        }
        for (let item of this.topping) {
            cal += item.cal; 
        }
        finalCal.innerHTML = `${cal} калорий`;
    }
    calculateCheck() {
        let finalStuff = document.querySelector(".finalStuff");
        finalStuff.innerHTML = "";
        let finalTop = document.querySelector(".finalTop");
        finalTop.innerHTML = "";
        for (let product of this.stuffing) {
            finalStuff.innerHTML += `${product.name} `;
        }
        for (let product of this.topping) {
            finalTop.innerHTML += `${product.name} `;
        }
    }
    buy() {
        let button = document.querySelector(".buy-btn");
        button.onclick = e => {
            if (this.checkCount < 1) {
                alert("Выберите хотя бы одну начинку!");
            }
            else {
                alert("Заказ готовится!");
            }
        }
    }
    render() {
        let smallBurger = document.querySelector(".labelSmall");
        let bigBurger = document.querySelector(".labelBig");
        smallBurger.insertAdjacentHTML("beforeEnd", this.burger[0].name);
        bigBurger.insertAdjacentHTML("beforeEnd", this.burger[1].name);
        let cheese = document.querySelector(".labelCheese");
        let salad = document.querySelector(".labelSalad");
        let potato = document.querySelector(".labelPotato");
        cheese.insertAdjacentHTML("beforeEnd", this.necessaryStuff[0].name);
        salad.insertAdjacentHTML("beforeEnd", this.necessaryStuff[1].name);
        potato.insertAdjacentHTML("beforeEnd", this.necessaryStuff[2].name);
        let spice = document.querySelector(".labelSpice");
        let mayo = document.querySelector(".labelMayo");
        spice.insertAdjacentHTML("beforeEnd", this.additionalStuff[0].name);
        mayo.insertAdjacentHTML("beforeEnd", this.additionalStuff[1].name);
        let totalBlock = document.querySelector(".finalCount");
        let sum = 0;
        let finalPrice = document.querySelector(".finalPrice");
        finalPrice.innerHTML = `${sum} рублей`;
        let cal = 0;
        let finalCal = document.querySelector(".finalCal");
        finalCal.innerHTML = `${cal} калорий`;
    }
}

let ham = new Hamburger();
ham.render();
