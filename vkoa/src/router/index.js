import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFind =  () => import(/* webpackChunkName: "vk-404" */ 'src/views/vk-404/vk-404');// 登陆
const Login = () => import(/* webpackChunkName: "vk-login" */ 'src/views/vk-login/vk-login');// 登陆
const Register = () => import(/* webpackChunkName: "vk-register" */ 'src/views/vk-login/vk-register'); // 注册
const Home = () => import(/* webpackChunkName: "vk-home" */ 'src/views/vk-home/vk-home'); // 主页
const Aside = () => import(/* webpackChunkName: "vk-aside" */ 'src/components/vk-aside/vk-aside')

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			components:{
				content:Home,
				aside:Aside
			},
			meta:{
				title:'首页',
				requestAuth:false,
				isFull:false
			}
		}, {
			path: '/login',
			name: 'login',
			component: Login
		}, {
			path: '/register',
			name: 'register',
			component:Register
		},{
			path:'*',
			name:'404',
			components:{content:NotFind},
			meta:{
				title:'404',
			}
		}
	]
})
