import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import axios from "./plugins/axios/axios";
import moment from './plugins/moment/moment';
import './plugins/element-ui/element-ui';


////////////////////// Load global css files ////////////////////////////////
import '@/globalStyles/globalReset.css';
import '@/globalStyles/DefaultLayout.css';
import '@/globalStyles/displays.css';
import '@/globalStyles/marginsAndPaddings.css';
import '@/globalStyles/alignmentAndWeight.css';
import '@/globalStyles/fonts.css';
import '@/globalStyles/heightAndWidth.css';
import '@/globalStyles/utileClasses.css';
////////////////////////////////////////////////////////////////////////////



////////////////////// Register plugins ////////////////////////////////////
Vue.use(axios);
Vue.use(VueFormulate);
Vue.use(axios);
Vue.use(moment);
import _ from 'lodash';

Vue.prototype.$_ = _;
Vue.prototype.$socket = new WebSocket('ws://localhost:3000/ws');

import VueFormulate from '@braid/vue-formulate';
import '@braid/vue-formulate/themes/snow/snow.scss';
////////////////////////////////////////////////////////////////////////////


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");