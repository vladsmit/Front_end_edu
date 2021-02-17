<template>
    <div id="app">
        <ProfileMenu />
        <div class="main--wrapper">
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script>
import ProfileMenu from "@/components/ProfileMenu.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        ProfileMenu,
        Footer,
    },
};
</script>

<style lang="scss">
body {
    width: 100vw;
    height: 100vh;
    background-color: black;
    margin: 0 auto;
}

#app {
    width: 1000px;
    height: 870px; //если удалить эту строчку, то при ширине 768px верхний блок с меню пропадет
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 40px 225px 0 75px;
    box-sizing: border-box;
}

.main--wrapper {
    width: 67%;
    min-height: 100%;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    #app {
        width: 768px;
        flex-wrap: nowrap;
        padding: 0 150px 0;
    }

    .main--wrapper {
        width: 100%;
        min-height: 90%;
    }
}
</style>