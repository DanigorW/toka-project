export default {
    state: {
        isLoading: false
    },
    mutations: {
        SET_IS_LOADING(state, payload) {
            console.log("Indise SET_IS_LOADING - payload", payload);
            state.isLoading = payload;
        }
    },
    getters: {
        GET_IS_LOADING(state) {
            console.log("Indise GET_IS_LOADING - state.isLoading", state.isLoading);
            return state.isLoading;
        }
    }
}