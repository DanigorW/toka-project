<template>
<div class="create">
    <DefaultLayout>
        <h1>Let's create your first project!</h1>
        <ProjectForm mode="create" btnText="Add project" />
    </DefaultLayout>
</div>
</template>

<script>
export default {
    name: "Create",
    data() {
        return {
            projectInfo: {
                name: "",
                description: "",
            }
        }
    },
    components: {
        DefaultLayout: () =>
            import(
                /* webpackChunkName: 'DefaultLayout' */
                '@/layouts/DefaultLayout.vue'
            ),
        ProjectForm: () =>
            import(
                /* webpackChunkName: 'ProjectForm' */
                '@/components/reusables/ProjectForm.vue'
            ),
    }
}
</script>

<style scoped>

</style>
