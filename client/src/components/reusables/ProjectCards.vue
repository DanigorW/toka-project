<template>
<div class="project-cards d-flex flex-wrap">
    <ProjectCard @click.native="setCurrentCard(card)"
     class="m-20 cursor-p"
      :project="card" :cardIndex="cardIndex"
       v-for="(card,cardIndex) in _GET_PROJECT_DATA" :key="card.name + '-' + cardIndex" />
</div>
</template>

<script>
import {
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex';
import sokets from "@/mixins/sokets"
export default {
    name: "ProjectCards",
    mixins: [sokets],
    data(){
      return {
        soketModel:'Project'
      }
    },  
    methods: {
        ...mapMutations(["SET_CURRENT_PROJECT"]),
        ...mapActions(["FETCH_PROJECTS"]),

        setCurrentCard(card) {
            this.SET_CURRENT_PROJECT(card)
            this.$router.push({
                path: `/projects/${card._id.split('-')[0]}`,

            });
        },

    },
    computed: {
        ...mapGetters(["GET_PROJECTS_DATA", "GET_CURRENT_SEARCH_TERM"]),
        _GET_PROJECT_DATA() {
            return this.GET_PROJECTS_DATA.filter(project => project.name.toLowerCase().match(this.GET_CURRENT_SEARCH_TERM.toLowerCase()))
        },
    },

    components: {
        ProjectCard: () =>
            import(
                /* webpackChunkName: 'ProjectCard' */
                '@/components/reusables/ProjectCard.vue'
            ),
    },
}
</script>

<style scoped>

</style>
