import {
    Loading
} from 'element-ui';
export default {
    data() {
        return {
            loadingInstance: null
        }
    },
    methods: {
        showLoading() {
            console.log("Indise showLoading - loadingInstance", this.loadingInstance);
            if (!this.loadingInstance) {
                this.loadingInstance = Loading.service({
                    //Main vue
                    target: this.$refs['main-view'],
                });
            }
        },
        hideLoading() {
            console.log("Indise hideLoading - loadingInstance", this.loadingInstance);
            if (this.loadingInstance) {
                this.loadingInstance.close();
                this.loadingInstance = null;
            }
        }
    },

    beforeDestroy() {
        this.hideLoading();
    },
}