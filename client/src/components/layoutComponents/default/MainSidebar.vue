<template>
<div class="main-sidebar h-100">
    <div class="font-size-20 font-bold text-white p-20 sidebar-header">
        <ul>
            <li class="sidebar-link" v-for="(link, linkIndex) in sidebarLinks" :key="linkIndex">
                <router-link :to="link">{{ link.lable }}</router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import mainSidebar from "@/mixins/mainSidebar"
export default {
    name: "MainSidebar",
    mixins: [mainSidebar],
    data() {
        return {
            isProjectsDropdownOpen: false,
        }
    },
    methods: {
        showProjects() {
            if (this.$route.path !== '/') {
                this.$router.push({
                    path: '/'
                })
            }
            this.isProjectsDropdownOpen = !this.isProjectsDropdownOpen;
        }
    }

}
</script>

<style lang="scss" scoped>
.main-sidebar {
    background: $p-color;
}

.sidebar-link a:hover {
    transition: color .3s;
    color: $logo-color;
}
</style>
