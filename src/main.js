import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题

Vue.use(ElementUI);
require('./common/date-format');
//加载vue filters
//
require('./common/filters/date');
require('./common/filters/money');
import VueResource from 'vue-resource';
Vue.use(VueResource);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
