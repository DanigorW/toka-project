import { mapGetters, mapMutations } from "vuex";
import { showNotification } from "@/js/helperFunctions"


export default {
    // All error handling is managed by the Axios interceptor
    // You do not need to use try-catch or catch blocks for general error handling
    // Use catch blocks only if you need to add additional logic for specific cases
    methods: {
        ...mapMutations(["DELETE_PROJECT", "SET_CURRENT_PROJECT", "UPDATE_PROJECT"]),
        addPoject() {
            console.log("Inside addPoject - this.GET_PROJECTS_DATA ,projectInfo", this.GET_PROJECTS_DATA, this.projectInfo)
                //New set in case we wroking with large DB
            const projectNamesSet = new Set(this.GET_PROJECTS_DATA.map(project => project.name));
            // Check if the project name exists
            if (projectNamesSet.has(this.projectInfo.name)) {
                showNotification('projectExist', 'error');
                return;
            }
            this.$axios.post('/api/projects', this.projectInfo, {
                headers: { 'X-Operation-Context': 'add' }
            });
            this.$router.push({
                path: '/projects'
            })

        },
        update() {
            console.log("Inside update - this.GET_CURRENT_PROJECT ,projectInfo", this.GET_CURRENT_PROJECT, this.projectInfo)
            this.$axios
                .put(`/api/projects/${this.GET_CURRENT_PROJECT._id}`, this.projectInfo, {
                    headers: { 'X-Operation-Context': 'update' }
                })
                .then(() => {
                    // Find the index of the project to update
                    let currentProjectIndex = this.GET_PROJECTS_DATA.findIndex(project => project._id === this.projectInfo._id);
                    this.UPDATE_PROJECT({ projectIndex: currentProjectIndex, payload: this.projectInfo });
                    this.$router.push({ path: "/projects" });
                })
        },


        deleteProject() {
            console.log("Inside deleteProject - this.GET_CURRENT_PROJECT", this.GET_CURRENT_PROJECT);
            this.$axios
                .delete(`/api/projects/${this.GET_CURRENT_PROJECT._id}`, {
                    headers: { 'X-Operation-Context': 'delete' }
                })
                .then(() => {
                    // Find the index of the project to delete
                    let currentProjectIndex = this.GET_PROJECTS_DATA.findIndex(project => project._id === this.GET_CURRENT_PROJECT._id);
                    if (currentProjectIndex !== -1) {
                        this.DELETE_PROJECT(currentProjectIndex);
                    }
                    this.SET_CURRENT_PROJECT("");
                    this.$router.push({ path: '/projects' });
                })

        },
        fetchProjectById(id) {
            console.log("Inside fetchProjectById - id", id)
            this.$axios.get(`/api/projects/${id}`)
                .then(response => {
                    const project = response.data;
                    this.SET_CURRENT_PROJECT(project);
                })
        },

    },
    computed: {
        ...mapGetters(["GET_PROJECTS_DATA", "GET_CURRENT_PROJECT"])
    }
}