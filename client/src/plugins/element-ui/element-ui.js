import Vue from 'vue';
import { Skeleton, SkeletonItem, Empty, Tag, Button, Input, Select, Loading, Option } from 'element-ui'; // Import only the components you need
import 'element-ui/lib/theme-chalk/index.css'; // library styles`
// Register the components globally
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Skeleton);
Vue.use(SkeletonItem);
Vue.use(Empty);
Vue.use(Tag);
Vue.use(Loading.directive);
Vue.component(Option.name, Option);