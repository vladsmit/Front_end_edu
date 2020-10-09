const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue(
    {
        el: "#app",
        data: {
            catalogUrl: "/catalogData.json",
            cartUrl: "/getBasket.json",
            products: [],
            filtered: [],
            cartItems: [],
            emptyList: "Нет данных",
            searchLine: "",
            isVisibleCart: false,
            imgCatalog: "https://placehold.it/200x150",
            imgCart: "https://placehold.it/50x50"
        },
        methods: {
            getJson(url){
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error);
                    })
            },
            
            addProduct(item){
                this.getJson(`${API}/addToBasket.json`)
                    .then(data => {
                        if(data.result === 1) {
                            let find = this.cartItems.find(el => el.id_product === item.id_product);
                            if(find) {
                                find.quantity++;    
                            }
                            else {
                                const prod = Object.assign({quantity: 1}, item);
                                this.$data.cartItems.push(prod);
                            }
                        }
                    })
            },
            
            removeProduct(item) {
                this.getJson(`${API}/addToBasket.json`)
                    .then(data => {
                        if(data.result === 1) {
                            if(item.quantity > 1) {
                                item.quantity--;
                            }
                            else {
                                this.$data.cartItems.splice(this.cartItems.indexOf(item), 1);
                            }
                        }
                    })
            },
            
            filterGoods(value) {
                const regexp = new RegExp(value, 'i');
                this.filtered = this.products.filter(product => regexp.test(product.product_name));
                /*this.products.forEach(el => {
                    const block = document.querySelector(`.product-item[:key="${el.id_product}"]`);
                    if(!this.filtered.includes(el)){
                        block.classList.add('invisible');
                    } else {
                        block.classList.remove('invisible');
                    }
                })*/
            }
        },
        mounted(){
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for(let item of data){
                        this.$data.products.push(item);
                        this.$data.filtered.push(item);
                    }
                }),
            this.getJson(`${API + this.cartUrl}`)
                .then(data => {
                    for(let item of data.contents) {
                        this.$data.cartItems.push(item);
                    }
                })
            /*this.getJson(`getProducts.json`)
                .then(data => {
                    for(let item of data) {
                        this.$data.products.push(item);
                        this.$data.filtered.push(item);
                    }
                })*/
        }
    }
);