<template>
<div class="main-navbar d-flex flex-align-center flex-justify-between  h-100 pl-20 pr-20">
    <img class="mr-10" src="@/assets/toka-logo.svg" alt="Toka logo">
    <MainSearchBar />
</div>
</template>

<script>
export default {
    name: "MainNavbar",
    data() {
        return {
            searchTerm: ""
        }
    },

    components: {
        MainSearchBar: () =>
            import(
                /* webpackChunkName: 'MainSearchBar' */
                '@/components/reusables/MainSearchBar.vue'
            ),
    }
   

}
</script>

<style lang="scss" scoped>
.filter {
    width: 250px;
}

.main-navbar {
    background: $s-color;

    img {
        transform: translateY(-1px);
    }

}
</style>
