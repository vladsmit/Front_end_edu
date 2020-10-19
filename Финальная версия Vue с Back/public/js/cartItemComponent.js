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

export default {
    cartItem : cartItem
}