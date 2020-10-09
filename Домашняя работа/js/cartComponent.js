Vue.component("cart", {
    props: ["visible", "img", "cartItems"],
    template: `<div class="cartBlock" v-if="visible">
                    <p v-if="!cartItems.length">Корзина пуста</p>
                    <cartItem v-for="item of cartItems" :key="item.id_product" :cart-item="item" :img="img"></cartItem>
                </div>`
});

Vue.component("cartItem", {
    props: ["cartItem", "img"],
    template: `<div class="cart-item">
                    <img class="cart-image" :src="img" alt="Some img">
                    <h3 class="cart-title">{{cartItem.product_name}}</h3>
                    <p class="cart-price">{{cartItem.price*cartItem.quantity}} $</p>
                    <p class="cart-quantity">{{cartItem.quantity}} шт</p>
                    <button class="del-btn" @click="$parent.$emit('remove-product', cartItem)"></button>
                </div>`
});