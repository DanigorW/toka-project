import { mapGetters } from "vuex"
export default {
    data() {
        return {
            sidebarLinks: [{
                    lable: "Add new project",
                    path: '/create'
                },
                {
                    lable: "Projects",
                    path: '/projects',
                }
            ]
        }
    },

    computed: {
        ...mapGetters(["GET_PROJECTS_DATA"])
    },
    created() {
        console.log("Inside creaated in mainSidebar - this.GET_PROJECTS_DATA", this.GET_PROJECTS_DATA)
        if (!this.$_.isEmpty(this.GET_PROJECTS_DATA)) {
            const indexOfProjectLink = this.sidebarLinks.findIndex(link => link.path === '/')
            if (indexOfProjectLink !== -1) {
                this.sidebarLinks[indexOfProjectLink].projects = this.GET_PROJECTS_DATA
                this.sidebarLinks[indexOfProjectLink].lable = `Projects (${this.GET_PROJECTS_DATA.length})`
            }

        }
    }

}