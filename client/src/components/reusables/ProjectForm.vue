<template>
<div class="project-form">

    <FormulateForm v-slot="{ hasErrors }" @submit="eventBasedOnMode">
        <FormulateInput :value="GET_CURRENT_PROJECT.name" validation="required" validation-message="Name is required" v-model="projectInfo.name" type="text" label="Project name" name="name" />
        <FormulateInput :value="GET_CURRENT_PROJECT.description" validation="required" validation-message="Description is required" v-model="projectInfo.description" type="textarea" label="Project description" name="description" />
        <div v-if="mode === 'update'" class="mb-20">
            <div class="dates">
                <p class="mb-10">Created at: <span>{{ $moment(GET_CURRENT_PROJECT.createdAt).format('MMMM D, YYYY h:mm A') }}</span></p>
                <p>Updated at: <span>{{ $moment(GET_CURRENT_PROJECT.updatedAt).format('MMMM D, YYYY h:mm A') }}</span></p>
            </div>
        </div>
        
        <div class="d-flex flex-align-start">
            <FormulateInput class="mr-10" :disabled="mode !== 'update' && hasErrors" type="submit" :label="btnText" />
            <el-button v-if="showDeleteBtn" class="h-100" type="danger" @click="deleteProject">Delete</el-button>
        </div>
    </FormulateForm>

</div>
</template>

<script>
import projectForm from "@/mixins/projectForm.js"
export default {
    name: "ProjectForm",
    mixins: [projectForm],
    props: {
        mode: {
            type: String,
            required: true,
            default: 'create'
        },
        btnText: {
            type: String,
            required: true,
            default: 'Add project'
        },
        showDeleteBtn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            projectInfo: {
                name: '',
                description: '',
            },
        };
    },
    methods: {
        eventBasedOnMode() {
            switch (this.mode) {
                case 'create':
                    this.addPoject()
                    break;
                case 'update':
                    this.update()
                    break;
                default:
                    break;
            }
        },
        
    },

}
</script>

<style>

</style>
