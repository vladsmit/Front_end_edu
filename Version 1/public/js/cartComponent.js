const cartItem = {
    props: ["cartItem"],
    template: `<div class="cart-item">
                    <img class="cart-image" :src="cartItem.cartImg" alt="Some img">
                    <h3 class="cart-title">{{cartItem.product_name}}</h3>
                    <p class="cart-price">{{cartItem.price*cartItem.quantity}} $</p>
                    <p class="cart-quantity">{{cartItem.quantity}} шт</p>
                    <button class="del-btn" @click="$root.removeProduct(cartItem)"></button>
                </div>`
};

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