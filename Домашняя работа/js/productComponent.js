Vue.component("products", {
    props: ["products", "img", "empty"],
    template: `<div class="products">
                    <p class="empty" v-if="!products.length">{{empty}}</p>
                    <product v-for="item of products" :key="item.id_product" :img="img" :product="item"></product>
                </div>`
});

Vue.component("product", {
    props: ["product", "img"],
    template: `<div class="product-item">
                    <img class="product-image" :src="img" alt="Some img">
                    <h3 class="product-title">{{product.product_name}}</h3>
                    <p class="product-price">{{product.price}} $</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>`
});