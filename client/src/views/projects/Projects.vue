<template>
<div>
    <DefaultLayout>
        <el-empty v-if="$_.isEmpty(GET_PROJECTS_DATA)" description="No Projects Found">
            <p>But don't worry, we've got you covered! 🌟</p>
            <p>Start creating your next big idea, and let us help you bring it to life!</p>
            <el-button class="mt-20" type="primary" @click="goToCreate">Let's start</el-button>
        </el-empty>

        <ProjectCards v-if="isIdParamInUrl" />
        <router-view></router-view>
    </DefaultLayout>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';
export default {
    name: "Home",

    methods: {
        ...mapActions(['FETCH_PROJECTS']),
        goToCreate() {
            this.$router.push({
                path: '/create'
            })
        }
    },
    computed: {
        ...mapGetters(["GET_IS_LOADING", "GET_CURRENT_PROJECT", 'GET_PROJECTS_DATA']),
        isIdParamInUrl() {
            return this.$_.isEmpty(this.$route.params.id)
        }
    },
    components: {
        DefaultLayout: () =>
            import(
                /* webpackChunkName: 'DefaultLayout' */
                '@/layouts/DefaultLayout.vue'
            ),
        ProjectCards: () =>
            import(
                /* webpackChunkName: 'ProjectCard' */
                '@/components/reusables/ProjectCards.vue'
            ),
    },
    async created() {
        //Fetch user data if not exist
        if (this.$_.isEmpty(this.GET_PROJECTS_DATA)) {
            await this.FETCH_PROJECTS();
        }
    }

};
</script>

<style>
    </style>
