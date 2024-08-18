<template>
<div v-if="isShowMainSearchBar" class="main-search-bar">
    <el-input @input="SET_CURRENT_SEARCH_TERM(searchTerm)" v-model="searchTerm" size="small" class="filter" type="text" prefix-icon="el-icon-search"></el-input>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex';

export default {
    name: "MainSearchBar",
    data() {
        return {
            searchTerm: "",
            allowedRoutes: ['projects']
        }
    },
    methods: {
        ...mapMutations(["SET_CURRENT_SEARCH_TERM"]),
    },
    computed: {
        isShowMainSearchBar() {
            console.log("Inside isShowMainSearchBar")
            return this.allowedRoutes.some(route =>
                this.$route.path.includes(route) && this.$_.isEmpty(this.$route.params.id)
            );
        }
    }

}
</script>

