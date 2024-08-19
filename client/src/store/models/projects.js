import axios from "axios";
import Vue from 'vue';
export default {
    state: {
        projects: [],
        currentProject: "",
    },
    mutations: {
        SET_PROJECTS_DATA(state, payload) {
            console.log("Inside SET_PROJECTS_DATA - payload", payload);
            state.projects = payload
        },
        SET_CURRENT_PROJECT(state, payload) {
            console.log("Inside SET_CURRENT_PROJECT - payload", payload);
            state.currentProject = payload
        },
        DELETE_PROJECT(state, payload) {
            console.log("Inside DELETE_PROJECT - payload", payload);
            state.projects.splice(payload, 1)
        },

        UPDATE_PROJECT(state, { projectIndex, payload }) {
            // Replace the existing project data with the updated data
            console.log("Inside UPDATE_PROJECT - payload", payload);
            Vue.set(state.projects, projectIndex, payload);
        },
        ADD_NEW_PROJECT(state, payload) {
            console.log("Inside ADD_NEW_PROJECT - state, payload", state, payload)
            state.projects.push(payload)
        }

    },
    getters: {
        GET_PROJECTS_DATA(state) {
            console.log("Inside GET_PROJECTS_DATA - state.projects", state.projects);
            return state.projects;
        },
        GET_CURRENT_PROJECT(state) {
            console.log("Inside GET_CURRENT_PROJECT - state.currentProject", state.currentProject);
            return state.currentProject;
        }
    },
    actions: {
        // All error handling is managed by the Axios interceptor. 
        // You do not need to use try-catch or catch blocks for general error handling. 
        // Use catch blocks only if you need to add additional logic for specific cases.
        async FETCH_PROJECTS({ commit }) {
            console.log("Inside FETCH_PROJECTS fetching data");
            commit('SET_IS_LOADING', true);
            const response = await axios.get('/api/projects');
            commit('SET_PROJECTS_DATA', response.data);
            commit('SET_IS_LOADING', false);
        },

    }
}