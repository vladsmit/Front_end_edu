<template>
    <img src="@/assets/404.png" alt="404" class="notFound" />
</template>

<script>
let date = new Date();

export default {
    name: "Error",
};
</script>

<style scoped lang="scss">
.notFound {
    width: 100%;
    min-height: 65%;
}
</style>