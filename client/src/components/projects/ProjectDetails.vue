<template>
<div class="project-details">
    <h1>Project details:</h1>
    <ProjectForm mode="update" btnText="Update" :showDeleteBtn="true" />
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import projectForm from "@/mixins/projectForm"
export default {
    name: "ProjectDetails",
    mixins: [projectForm],

    computed: {
        ...mapGetters(["GET_CURRENT_PROJECT"])
    },
    created() {
        if (this.$route.params.id && this.$_.isEmpty(this.GET_CURRENT_PROJECT)) {
            this.fetchProjectById(`${this.$route.params.id}`)
        }
    },
    beforeDestroy() {
        //Reset project selection
        this.SET_CURRENT_PROJECT("")
    },
    components: {
        ProjectForm: () =>
            import(
                /* webpackChunkName: 'ProjectForm' */
                '@/components/reusables/ProjectForm.vue'
            ),
    },


}
</script>

<style>

</style>
