export default {
    state: {
        currentSearchTerm: "",
    },
    mutations: {
        SET_CURRENT_SEARCH_TERM(state, payload) {
            console.log("Inside SET_CURRENT_SEARCH_TERM - payload", payload);
            state.currentSearchTerm = payload
        }
    },
    getters: {
        GET_CURRENT_SEARCH_TERM(state) {
            console.log("Inside GET_CURRENT_SEARCH_TERM - state.currentSearchTerm", state.currentSearchTerm)
            return state.currentSearchTerm;
        }
    }
}