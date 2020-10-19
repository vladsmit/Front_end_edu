const product = {
    props: ["product"],
    template: `<div class="product-item">
                    <a :href="product.watchImg" target="_blank"><img class="product-image" :src="product.img" alt="Some img"></a>
                    <h3 class="product-title">{{product.product_name}}</h3>
                    <p class="product-price">{{product.price}} $</p>
                    <button class="buy-btn" @click="$root.addProduct(product)">Купить</button>
                </div>`
};

export default {
    product : product
}