import { mapMutations, mapGetters } from "vuex";
export default {
    methods: {
        ...mapMutations(["UPDATE_PROJECT", "ADD_NEW_PROJECT"]),
        handleSocketMessage(event, model = 'Project') {
            console.log("Inside handleSocketMessage - event, model", event, model)
            const data = JSON.parse(event.data);
            if (this.getModel(data) === model && this.getSocketType(data) === 'UPDATE') {
                const currentProject = this.GET_PROJECTS_DATA.findIndex(project => project._id === data.data._id);
                // Update state with new data for existing project
                this.UPDATE_PROJECT({ projectIndex: currentProject, payload: data });
            } else if (this.getModel(data) === model && this.getSocketType(data) === 'INSERT') {
                // Update state with new project
                this.ADD_NEW_PROJECT(data.data);
            }
        },
        getSocketType(data) {
            console.log("Inside getSocketType - data", data);
            return data.type;
        },
        getModel(data) {
            console.log("Inside getModel - data", data);
            return data.model;
        },

        socketMessageListener(event) {
            //When using this function, add socketModel in the data object of the component
            console.log("Inside socketMessageListener - event", event)
            this.handleSocketMessage(event, this.soketModel);
        }

    },
    computed: {
        ...mapGetters(["GET_PROJECTS_DATA"])
    },
    created() {
        this.$socket.addEventListener("message", this.socketMessageListener);
    },
    beforeDestroy() {
        this.$socket.removeEventListener("message", this.socketMessageListener);
    }


}