<template>
    <div class="mainMenu--wrapper">
        <input class="mobileMenu--input" type="checkbox" id="mobileMenu">
        <label class="mobileMenu--label" for="mobileMenu"></label>
        <div class="mobileMenu--burgerLine first"></div>
        <div class="mobileMenu--burgerLine second"></div>
        <div class="mobileMenu--burgerLine third"></div>
        <div class="mobileMenu--burgerLine forth"></div>
        <nav class="mainMenu">
            <li class="mainMenu__item mainMenu__item--header">Личный кабинет</li>
            <router-link to="/payments" class="mainMenu__item--link">
                <li class="mainMenu__item">Платежи</li>
            </router-link>
            <router-link to="/history" class="mainMenu__item--link">
                <li class="mainMenu__item">История платежей</li>
            </router-link>
            <li class="mainMenu__item mainMenu__item--header">Выйти</li>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ProfileMenu",
};
</script>

<style scoped lang="scss">
.mainMenu--wrapper {
    width: 33%;
    min-height: 100%;
}

.mainMenu {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
}

.mainMenu__item {
    width: 100%;
    min-height: 65px;
    background-color: rgb(25, 24, 27);
    border-top: 1px solid rgb(105, 103, 103);
    color: #fff;
    font: 600 16px/65px "Arial", sans-serif;
    letter-spacing: 1px;
    padding-left: 25px;
    box-sizing: border-box;
    transition: ease-out 300ms all;
    &:nth-child(4) {
        border-bottom: 1px solid rgb(105, 103, 103);
    }
    &:hover {
        background-color: rgb(105, 103, 103);
        color: lightgray;
    }
    &:active {
        background-color: rgb(25, 24, 27);
        color: #fff;
    }
    &--header:hover {
        background-color: rgb(25, 24, 27);
        color: #fff;
    }
}

.mainMenu__item--link {
    text-decoration: none;
}

.mobileMenu--input {
    display: none;
}

.mobileMenu--label {
    width: 56px;
    min-height: 30px;
    display: none;
    position: absolute;
    top: 27px;
    right: 27px;
    cursor: pointer;
    z-index: 1;
}

.mobileMenu--burgerLine {
    display: none;
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 3px;
    background-color: #fff;
    transition: 500ms all;
}

.second, .third {
    top: 40px;
}

.forth {
    top: 50px;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    .mainMenu--wrapper {
        width: 100%;
        min-height: 10%;
        position: relative;
        background-color: rgb(41, 46, 58);
    }

    .mainMenu {
        display: block;
        max-height: 0;
        font-size: 0;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 3;
        transform: translateY(100%);
        transition: 500ms all;
    }

    .mainMenu__item {
        text-align: center;
        padding: 0;
    }

    .mobileMenu--label, .mobileMenu--burgerLine {
        display: block;
    }

    #mobileMenu:checked ~ .mainMenu {
        max-height: 265px;
        font-size: 16px;
    }

    #mobileMenu:checked ~ .first {
        display: none;
    }

    #mobileMenu:checked ~ .second {
        transform: rotate(45deg);
    }

    #mobileMenu:checked ~ .third {
        transform: rotate(-45deg);
    }

    #mobileMenu:checked ~ .forth {
        display: none;
    }
}
</style>