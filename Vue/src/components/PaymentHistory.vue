<template>
    <div class="history--wrapper">
        <h3 class="history__title">История платежей</h3>
        <div class="table--wrapper">
            <div class="table__title--wrapper">
                <p class="table__title__item table__title__item--1">
                    Номер счета
                </p>
                <p class="table__title__item table__title__item--2">Сумма</p>
                <p class="table__title__item table__title__item--3">
                    Дата транзакции
                </p>
            </div>
            <div
                class="table__content--wrapper"
                v-for="(account, index) in this.$store.state.accounts"
                :key="index"
            >
                <p class="table__content__item table__content__item--1">
                    {{ account.accountNumber }}
                </p>
                <p class="table__content__item table__content__item--2">
                    {{ account.sum }}
                </p>
                <p class="table__content__item table__content__item--3">
                    {{ account.date }}
                </p>
            </div>
        </div>
        <router-link to="/payments" class="button--link"
            ><input type="button" value="Вернуться в кабинет" class="button"
        /></router-link>
    </div>
</template>

<script>
export default {
    name: "PaymentHistory",
};
</script>

<style scoped lang="scss">
.history--wrapper {
    width: 100%;
    min-height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 40px 0;
    box-sizing: border-box;
}

.history__title {
    font: 600 20px "Arial", sans-serif;
}

.table--wrapper {
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.table__title--wrapper {
    display: grid;
    grid-template-columns: repeat(3, 125px);
}

.table__title__item {
    font: 600 14px "Arial", sans-serif;
    margin: 5px auto;
    &--1 {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    &--2 {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    &--3 {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }
}

.table__content--wrapper {
    display: grid;
    grid-template-columns: repeat(3, 125px);
}

.table__content__item {
    font: 400 14px "Arial", sans-serif;
    margin: 5px auto;
    &--1 {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    &--2 {
        grid-column-start: 2;
        grid-column-end: 3;
    }
    &--3 {
        grid-column-start: 3;
        grid-column-end: 4;
    }
}

.button {
    border: none;
    border-radius: 30px;
    background-color: rgba(7, 87, 179, 0.836);
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    color: #fff;
    font: 400 14px "Arial", sans-serif;
    padding: 10px 26px;
    box-sizing: border-box;
    cursor: pointer;
    transition: ease-out 300ms background-color;
    &:hover {
        background-color: rgba(37, 110, 158, 0.836);
    }
    &:active {
        background-color: rgba(7, 87, 179, 0.836);
    }
    &--link {
        text-decoration: none;
    }
}
</style>