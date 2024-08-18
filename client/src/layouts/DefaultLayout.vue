<template>
<div class="default-layout-container">
    <nav class="main-navbar">
        <MainNavbar />
    </nav>
    <aside class="main-sidebar">
        <MainSidebar />
    </aside>
    <main ref="main-view" class="main-view">
        <slot></slot>
    </main>
</div>
</template>

<script>
import loader from "@/mixins/loader"
import {
    mapGetters
} from 'vuex';
export default {
    name:"DefaultLayout",
    mixins:[loader],
    computed: {
        ...mapGetters(["GET_IS_LOADING"])
    },
    watch: {
        //Each time the loader is triggerd we show spinner
        GET_IS_LOADING(newV) {
            if (newV) {
                this.showLoading();
            } else {
                this.hideLoading();
            }
        }
    },
    components: {
        MainNavbar: () =>
            import(
                /* webpackChunkName: 'MainNavbar' */
                '@/components/layoutComponents/default/MainNavbar.vue'
            ),
        MainSidebar: () =>
            import(
                /* webpackChunkName: 'MainSidebar' */
                '@/components/layoutComponents/default/MainSidebar.vue'
            ),
    }
};
</script>

<style>
/* ensure that the loader is always in the middle of its container */
.el-loading-spinner {
    left: 50%;
}
</style>
