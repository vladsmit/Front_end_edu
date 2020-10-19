const cart = {
    components: {cartItem},
    props: ["cartItems"],
    data() {
        return {
            isVisibleCart: false
        }
    },
    template: `<div>
                    <button class="btn-cart" type="button"><img src="img/basket.png" alt="Корзина" width="30" height="30" @click="isVisibleCart=!isVisibleCart"></button>
                    <div class="cartBlock" v-if="isVisibleCart">
                        <p v-if="!cartItems.length">Корзина пуста</p>
                        <cartItem v-for="item of cartItems" :key="item.id_product" :cart-item="item"></cartItem>
                    </div>
                </div>`
};

import cartItemComp from "./cartItemComponent.js";

const cartItem = cartItemComp.cartItem;

export default {
    components: {
        cartItem : cartItem
    },
    cart : cart
}