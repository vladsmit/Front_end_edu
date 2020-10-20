const search = {
    data() {
        return {
            userSearch: ""
        }
    },
    template: `<form action="#" class="searchForm" @submit.prevent="$root.filterGoods(userSearch)">
                    <input class="input-search" type="text" v-model="userSearch">
                    <button class="btn-search" type="button"></button>
                </form>`
};