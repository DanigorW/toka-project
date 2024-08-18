import Vue from "vue";
import Vuex from "vuex";
import projects from "@/store/models/projects"
import mainSearchBar from "@/store/models/mainSearchBar"
import loader from "@/store/models/loader"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: {
        projects,
        mainSearchBar,
        loader
    },
});