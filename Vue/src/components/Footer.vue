<template>
    <footer class="mainFooter">
        <p class="mainFooter__text">
            Совершайте покупки безопаснее, ведь мы&nbsp;обеспечиваем
            безопасность ваших данных. Программа защиты покупателей покрывает
            соответствующие нашим требованиям товары, если они
            не&nbsp;доставлены или не&nbsp;соответствуют описанию.
        </p>
        <p class="mainFooter__text">
            Совершайте онлайн-платежи с&nbsp;помощью электронного адреса
            и&nbsp;пароля для входа в&nbsp;систему, не&nbsp;вводя данные ваших
            банковских карт. Или оплачивайте еще быстрее с&nbsp;помощью функции
            One Touch&trade;, оставаясь в&nbsp;системе и&nbsp;оплачивая заказы
            без ввода пароля. Кроме того, соответствующие нашим политикам
            покупки покрываются Программой защиты покупателей.
        </p>
        <p class="mainFooter__text">
            Регистрация счета и&nbsp;покупки бесплатны, кроме случаев, когда
            требуется конвертация валюты. Комиссия не&nbsp;взимается. Обратите
            внимание, что комиссии могут применяться к&nbsp;другим видам
            операций.
        </p>
        <p class="mainFooter__text">
            Открыв всего один счет, вы&nbsp;можете совершать покупки
            на&nbsp;тысячах веб-сайтов по&nbsp;всему миру и&nbsp;отправлять
            денежные переводы друзьям практически из&nbsp;любой точки планеты.
            Используйте любое из&nbsp;своих устройств для управления счетом
            через приложение.
        </p>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped lang="scss">
.mainFooter {
    width: 100%;
    min-height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(41, 46, 58);
    padding: 10px 20px 0 10px;
    box-sizing: border-box;
}

.mainFooter__text {
    color: rgb(100, 97, 97);
    font: 200 10px/15px "Arial", sans-serif;
    margin: 0;
}
</style>