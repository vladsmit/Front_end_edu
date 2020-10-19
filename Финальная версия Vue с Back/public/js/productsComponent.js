const products = {
    components: {product},
    props: ["products"],
    template: `<div class="products">
                    <product v-for="item of products" :key="item.id_product" :product="item"></product>
                </div>`
};

import productComp from "./productComponent.js";

const product = productComp.product

export default {
    components: {
        product : product
    },
    products : products
}