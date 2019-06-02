import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import utils from 'src/utils/utils'

Vue.prototype.$utils = utils;



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入基础css
import '@/assets/sass/reset.scss'


router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title
	// if (to.meta.requiresAuth && store.getters.isGuest)
	// 	next('/')
	// else
		next()
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


let style = `font-size: 32px;
			color: #fff;
			text-align: center;
			text-shadow:2px 2px 4px #000;
			background:linear-gradient(#84fab0,#8fd3f4);
			font-family: 'Microsoft YaHei',arial,tahoma,sans-serif;
			padding:10px 15px;
			border-radius:8px`;
let txt = '小冰心'
console.log(`%c${txt}`,`${style}`)
