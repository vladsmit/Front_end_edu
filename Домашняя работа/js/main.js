const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue(
    {
        el: "#app",
        data: {
            catalogUrl: "/catalogData.json",
            cartUrl: "/getBasket.json",
            products: [],
            filtered: [],
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
            addProduct(product){
            
            },
            filterGoods() {
                const regexp = new RegExp(this.searchLine, 'i');
                this.filtered = this.products.filter(product => regexp.test(product.product_name));
                this.products.forEach(el => {
                    const block = document.querySelector(`.product-item[:key="${el.id_product}"]`);
                    if(!this.filtered.includes(el)){
                        block.classList.add('invisible');
                    } else {
                        block.classList.remove('invisible');
                    }
                })
            }
        },
        mounted(){
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for(let el of data){
                        this.products.push(el);
                        this.filtered.push(el);
                    }
                })   
        }
    }
);